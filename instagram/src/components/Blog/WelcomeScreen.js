import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {userSelector} from '../../redux/userReducer';
import {StoryContainer} from '../Story/StoryContainer';
import {BlogHeader} from './BlogHeader';
import {PostCard} from './PostCard';
import styles from './styles';
import {UserCard} from './UserCard';
import {fetchPostsRequest, postsSelector} from './../../redux/postsReducer';
import BottomModal from './BottomModal';

export const WelcomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [isModalShown, setisModalShown] = useState(false);
  const posts = useSelector(postsSelector);
  const user = useSelector(userSelector);
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(fetchPostsRequest());
    });
    return unsubscribe;
  }, [navigation]);

  const [isNew, setisNew] = useState(false);
  const [initializing, setinitializing] = useState(true);

  return (
    <>
      <View style={styles.container}>
        {initializing ? null : <StoryContainer />}
        {isNew ? (
          <>
            <Text style={styles.bigblacktext}>Welcome to Instagram</Text>
            <View style={styles.longtextcontainer}>
              <Text style={styles.shadytext}>
                Follow people to start seeing the photos and videos they share.
              </Text>
            </View>
            <UserCard />
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
