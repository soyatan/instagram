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

export const WelcomeScreen = () => {
  const dispatch = useDispatch();

  const posts = useSelector(postsSelector);
  console.log(posts);

  //useEffect(() => {}, [posts]);

  useEffect(() => {
    dispatch(fetchPostsRequest());
  }, []);
  const [isNew, setisNew] = useState(false);
  const [initializing, setinitializing] = useState(true);

  return (
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
          style={{flex: 1}}
          data={posts}
          nestedScrollEnabled={true}
          scrollEnabled={true}
          renderItem={({item}) => {
            return <PostCard item={item} />;
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
};
