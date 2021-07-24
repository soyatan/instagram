import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {followUserRequest, userSelector} from '../../redux/userReducer';
import {StoryContainer} from '../Story/StoryContainer';
import {BlogHeader} from './BlogHeader';
import styles from './styles';
import {UserCard} from './UserCard';
import {fetchPostsRequest, postsSelector} from '../../redux/postsReducer';
import BottomModal from './BottomModal';
import {
  fetchPopularUsersRequest,
  popularUserSelector,
} from '../../redux/popularUserReducer';
import {UserCardSmall} from './UserCardSmall';
import {ProfilePhotoSmall} from './ProfilePhotoSmall';
import {ProfilePhoto} from './ProfilePhoto';
import {countSelfPostsRequest} from '../../redux/selfPostsReducer';
import AuthButton from './../Auth/AuthButton';
import {signOutAction} from './../../redux/userReducer';

export const UserProfileScreen = ({route, navigation}) => {
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(countSelfPostsRequest());
    });
    return unsubscribe;
  }, [navigation]);
  const dispatch = useDispatch();
  const signout = () => {
    dispatch(signOutAction());
  };
  const user = route.params.user;
  const postCount = route.params.postCount;

  return (
    <View style={styles.userprofilecontainer}>
      <View style={styles.userprofiletopcontainer}>
        <View style={{alignSelf: 'flex-start'}}>
          <ProfilePhoto source={user.pplink} />
          <Text style={styles.bigblacktextnomargin}>{user.userName}</Text>
        </View>
        <View style={styles.userprofrightcontainer}>
          <View style={styles.twolinecontainer}>
            <Text style={styles.blacktextprofile}>{postCount}</Text>
            <Text>Posts</Text>
          </View>
          <View style={styles.twolinecontainer}>
            <Text style={styles.blacktextprofile}>{user.followers.length}</Text>
            <Text>Followers</Text>
          </View>
          <View style={styles.twolinecontainer}>
            <Text style={styles.blacktextprofile}>{user.following.length}</Text>
            <Text>Following</Text>
          </View>
        </View>
      </View>
      <View style={{height: 100}}></View>
      <AuthButton
        label={'Edit Profile Photo'}
        onPress={() => navigation.navigate('Photo')}
        pressable={true}></AuthButton>
      <AuthButton
        label={'Sign Out'}
        pressable={true}
        onPress={() => signout()}></AuthButton>
    </View>
  );
};
