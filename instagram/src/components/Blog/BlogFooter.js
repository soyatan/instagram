import React from 'react';
import {View, Text} from 'react-native';
import {Icon} from '../../Assets/Svgs/icon';
import styles from './styles';
import {TouchableIcon} from './../../Assets/Svgs/touchableIcon';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {userSelector} from '../../redux/userReducer';
import {ProfilePhotoSmaller} from './ProfilePhotoSmaller';
import {ProfilePhotoHeader} from './ProfilePhotoHeader';
import {selfPostsSelector} from './../../redux/selfPostsReducer';

export const BlogFooter = () => {
  const user = useSelector(userSelector);
  const postCount = useSelector(selfPostsSelector);
  const navigation = useNavigation();
  return (
    <View style={styles.blogfooter}>
      <TouchableIcon
        name={'Home'}
        scale={1.2}
        onPress={() => navigation.navigate('Welcome')}
      />
      <TouchableIcon
        name={'Search'}
        scale={1.2}
        onPress={() => navigation.navigate('Search')}
      />
      <TouchableIcon name={'Video'} scale={1.2} />
      <TouchableIcon name={'Store'} scale={1.2} />
      {!user.pplink ? (
        <TouchableIcon
          name={'User'}
          scale={1.2}
          onPress={() =>
            navigation.navigate('UserProfile', {
              user: user,
              postCount: postCount,
            })
          }
        />
      ) : (
        <ProfilePhotoHeader
          source={user.pplink}
          onPress={() =>
            navigation.navigate('UserProfile', {
              user: user,
              postCount: postCount,
            })
          }
        />
      )}
    </View>
  );
};
