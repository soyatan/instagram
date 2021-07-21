import React, {useCallback, useMemo, useEffect, useState, useRef} from 'react';
import {View, ScrollView, Text, Image} from 'react-native';
import styles from './styles';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {ProfilePhotoSmall} from './ProfilePhotoSmall';
import {TouchableIcon} from './../../Assets/Svgs/touchableIcon';
import {ImageLink} from './../../Assets/Images/index';
import {Icon} from './../../Assets/Svgs/icon';
import {useNavigation} from '@react-navigation/native';
import BottomModal from './BottomModal';
import {CommentContainer} from './CommentContainer';
import MemoHeart from '../../Assets/Svgs/Heart';
import MemoFavorite from './../../Assets/Svgs/Favorite';
import {useDispatch} from 'react-redux';
import {addCommentToPosts} from './../../redux/postsReducer';

export const PostCard = ({
  item,
  isModalShown,
  setisModalShown,
  pplink,
  userId,
  userName,
}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [timeTag, settimeTag] = useState('');
  const [likeCount, setlikeCount] = useState(0);
  const [isLiked, setisLiked] = useState(false);
  const [isFavorite, setisFavorite] = useState(false);
  const [comment, setcomment] = useState('');
  const [comments, setcomments] = useState([]);

  useEffect(() => {
    setlikeCount(item.likers.length);
  }, [item]);

  useEffect(() => {
    setcomments(item.comments);
  }, [item]);

  useEffect(() => {
    const calculateTimeText = item => {
      const timePassed = (-item.postdate + Date.now()) / 1000;

      if (Math.round(timePassed) <= 60) {
        settimeTag(`${Math.round(timePassed)} seconds ago`);
      } else if (Math.round(timePassed) <= 3600) {
        settimeTag(`${Math.round(timePassed / 60)} minutes ago`);
      } else if (
        (Math.round(timePassed) > 3600) &
        (Math.round(timePassed) < 7200)
      ) {
        settimeTag(`1 hour ago`);
      } else if (
        (Math.round(timePassed) >= 7200) &
        (Math.round(timePassed) < 86400)
      ) {
        settimeTag(`${Math.round(timePassed / 3600)} hours ago`);
      } else if (
        (Math.round(timePassed) >= 86400) &
        (Math.round(timePassed) < 172800)
      ) {
        settimeTag(`1 day ago`);
      } else {
        settimeTag(`${Math.round(timePassed / 86400)} days ago`);
      }
    };
    if (item.postdate) {
      calculateTimeText(item);
    }
  }, [item]);
  useEffect(() => {
    const likers = [...item.likers];

    if (likers.find(item => item === userId)) {
      setisLiked('#f44336');
    } else {
      setisLiked(null);
    }
  }, [item]);
  useEffect(() => {
    const favoriters = [...item.favoriters];
    if (favoriters.find(item => item === userId)) {
      setisFavorite('#f44336');
    } else {
      setisFavorite(null);
    }
  }, [item]);

  const [fullDescriptionShown, setfullDescriptionShown] = useState(false);
  const navigateToComments = () => {
    navigation.navigate('Comments', {
      comments: comments,
      pplink: pplink,
      postId: item.postId,
      posterId: item.posterId,
      userName: userName,
    });
  };
  const addComment = () => {
    dispatch(
      addCommentToPosts(item.posterId, item.postId, item.posterName, comment),
    );
    setcomment('');
    navigateToComments();
  };
  const switchModalShown = () => {
    if (isModalShown) {
      setisModalShown(false);
    } else {
      setisModalShown(item.posterId);
    }
  };

  return (
    <>
      <View style={styles.postcardcontainer}>
        <View style={styles.postcardtopcontainer}>
          <ProfilePhotoSmall source={item.pplink} />
          <View style={styles.doubletextstack}>
            <Text style={styles.blacktext}>{item.posterName}</Text>
            {item.location ? <Text>{item.location} </Text> : null}
          </View>
          <View style={styles.optionsbuttoncontainer}>
            <TouchableIcon
              name={'Three_Dots'}
              scale={1}
              onPress={() => switchModalShown()}
            />
          </View>
        </View>
        <View style={styles.postimagecontainer}>
          <Image style={styles.image} source={{uri: item.link}} />
        </View>
        <View style={styles.postcardbottomcontainer}>
          <View
            style={{
              flex: 1.4,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <MemoHeart
              scale={1.3}
              postId={item.postId}
              posterId={item.posterId}
              isLiked={isLiked}
              setisLiked={setisLiked}
              setlikeCount={setlikeCount}
              likeCount={likeCount}
            />

            <TouchableIcon name={'Comment'} scale={1.3} />
            <TouchableIcon name={'Message'} scale={1.3} />
          </View>
          <View
            style={{
              flex: 2,
              flexDirection: 'row',
              alignItems: 'center',
            }}></View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',

              alignItems: 'flex-end',
            }}>
            <MemoFavorite
              scale={1.3}
              postId={item.postId}
              posterId={item.posterId}
              isFavorite={isFavorite}
              setisFavorite={setisFavorite}
            />
          </View>
        </View>
        {likeCount === 1 ? (
          <View style={styles.likecontainer}>
            <Text>1 Like</Text>
          </View>
        ) : likeCount > 1 ? (
          <View style={styles.likecontainer}>
            <Text> {likeCount} Likes </Text>
          </View>
        ) : null}

        <View style={styles.descriptioncontainer}>
          {!fullDescriptionShown && item.caption.length > 55 ? (
            <Text style={styles.blacktext} numberOfLines={2}>
              {`${item.posterName} `}
              <Text style={styles.commenttext}>
                {item.caption.substring(0, 55)}
              </Text>
              <Text
                onPress={() => setfullDescriptionShown(true)}
                style={styles.shadytext}>
                ...more
              </Text>
            </Text>
          ) : (
            <Text style={styles.blacktext}>
              {`${item.posterName} `}
              <Text style={styles.commenttext}>{item.caption}</Text>
            </Text>
          )}
        </View>
        {item.comments.length === 0 ? null : item.comments.length === 1 ? (
          <Text
            onPress={() => navigateToComments()}
            style={styles.shadytexttoleft}>
            View 1 comment
          </Text>
        ) : item.comments.length > 1 ? (
          <Text
            onPress={() => navigateToComments()}
            style={styles.shadytexttoleft}>
            {`View all ${item.comments.length} comments`}
          </Text>
        ) : null}
        <CommentContainer
          comment={comment}
          setcomment={setcomment}
          pplink={pplink}
          onEndEditing={() => addComment()}
        />

        <Text style={styles.datetext}>{timeTag}</Text>
      </View>
    </>
  );
};
