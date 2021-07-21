import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {followUserRequest, userSelector} from '../../redux/userReducer';
import {StoryContainer} from '../Story/StoryContainer';
import {BlogHeader} from './BlogHeader';
import {PostCard} from './PostCard';
import styles from './styles';
import {UserCard} from './UserCard';
import {fetchPostsRequest, postsSelector} from './../../redux/postsReducer';
import BottomModal from './BottomModal';
import {
  fetchPopularUsersRequest,
  popularUserSelector,
} from './../../redux/popularUserReducer';

export const WelcomeScreen = ({navigation}) => {
  const [isNew, setisNew] = useState(true);
  const [initializing, setinitializing] = useState(true);

  const dispatch = useDispatch();
  const [isModalShown, setisModalShown] = useState(false);
  const posts = useSelector(postsSelector);
  const user = useSelector(userSelector);
  const popularusers = useSelector(popularUserSelector);
  const switchFollowing = userId => {
    dispatch(followUserRequest(user.userId, userId));
    setisNew(false);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(fetchPostsRequest());
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    if (posts.length < 1) {
      setisNew(true);
    }
  }, [posts]);

  useEffect(() => {
    dispatch(fetchPopularUsersRequest(user.userId));
  }, []);

  return (
    <>
      <View style={styles.container}>
        <StoryContainer />

        {!isNew && user && popularusers.length > 0 ? (
          <>
            <Text style={styles.bigblacktext}>Welcome to Instagram</Text>
            <View style={styles.longtextcontainer}>
              <Text style={styles.shadytext}>
                Follow people to start seeing the photos and videos they share.
              </Text>
            </View>
            <UserCard
              user={popularusers[0]}
              switchFollowing={switchFollowing}
            />
          </>
        ) : (
          <FlatList
            style={{flex: 1, width: '100%'}}
            data={posts}
            nestedScrollEnabled={true}
            scrollEnabled={true}
            renderItem={({item}) => {
              return (
                <PostCard
                  item={item}
                  setisModalShown={setisModalShown}
                  isModalShown={isModalShown}
                  pplink={user.pplink}
                  userId={user.userId}
                  userName={user.userName}
                />
              );
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        )}
      </View>
      <BottomModal
        isModalShown={isModalShown}
        setisModalShown={setisModalShown}
      />
    </>
  );
};
