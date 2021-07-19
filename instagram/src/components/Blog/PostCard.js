import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text, Image} from 'react-native';
import styles from './styles';

import {ProfilePhotoSmall} from './ProfilePhotoSmall';
import {TouchableIcon} from './../../Assets/Svgs/touchableIcon';
import {ImageLink} from './../../Assets/Images/index';
import {Icon} from './../../Assets/Svgs/icon';

export const PostCard = ({item}) => {
  const [timeTag, settimeTag] = useState('');
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
  const [fullDescriptionShown, setfullDescriptionShown] = useState(false);

  return (
    <View style={styles.postcardcontainer}>
      <View style={styles.postcardtopcontainer}>
        <ProfilePhotoSmall source={item.pplink} />
        <View style={styles.doubletextstack}>
          <Text style={styles.blacktext}>{item.posterName}</Text>
          {item.location ? <Text>{item.location} </Text> : null}
        </View>
        <View style={styles.optionsbuttoncontainer}>
          <TouchableIcon name={'Three_Dots'} scale={1} />
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
          <Icon name={'Like'} scale={1.3} />
          <Icon name={'Comment'} scale={1.3} />
          <Icon name={'Message'} scale={1.3} />
        </View>
        <View
          style={{flex: 2, flexDirection: 'row', alignItems: 'center'}}></View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',

            alignItems: 'flex-end',
          }}>
          <Icon name={'Favorite'} scale={1.3} />
        </View>
      </View>
      {item.likers.length === 1 ? (
        <View style={styles.likecontainer}>
          <Text>1 Like</Text>
        </View>
      ) : item.likers.length > 1 ? (
        <View style={styles.likecontainer}>
          <Text> {item.likers.length} Likes </Text>
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
          onPress={() => setfullDescriptionShown(true)}
          style={styles.shadytexttoleft}>
          View 1 comment
        </Text>
      ) : item.comments.length > 1 ? (
        <Text
          onPress={() => setfullDescriptionShown(true)}
          style={styles.shadytexttoleft}>
          {`View all ${item.comments.length} comments`}
        </Text>
      ) : null}

      <Text style={styles.datetext}>{timeTag}</Text>
    </View>
  );
};
