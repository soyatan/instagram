import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {followUserRequest, userSelector} from '../../redux/userReducer';
import {StoryContainer} from '../Story/StoryContainer';
import {BlogHeader} from './BlogHeader';
import {PostCard} from './PostCard';
import styles from './styles';
import {UserCard} from './UserCard';
import {fetchPostsRequest, postsSelector} from '../../redux/postsReducer';
import BottomModal from './BottomModal';
import {
  fetchPopularUsersRequest,
  popularUserSelector,
} from '../../redux/popularUserReducer';
import {UserCardSmall} from './UserCardSmall';

export const SearchScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);

  const popularusers = useSelector(popularUserSelector);

  const switchFollowing = userId => {
    dispatch(followUserRequest(user.userId, userId));
    setisNew(false);
  };
  return (
    <>
      <Text style={[styles.bigblacktext, {alignSelf: 'center'}]}>
        Popular Users
      </Text>
      <View style={styles.searchscreencontainer}>
        <FlatList
          style={{width: '100%'}}
          data={popularusers}
          renderItem={({item}) => {
            return (
              <UserCardSmall user={item} switchFollowing={switchFollowing} />
            );
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </>
  );
};
