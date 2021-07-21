import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {TouchableIcon} from '../../Assets/Svgs/touchableIcon';
import {ProfilePhoto} from './ProfilePhoto';
import {Icon} from '../../Assets/Svgs/icon';
import {PhotoSized} from './PhotoSized';
import SmallButton from './SmallButton';
import {useSelector} from 'react-redux';
import {userSelector} from '../../redux/userReducer';

export const UserCard = ({user, switchFollowing}) => {
  const self = useSelector(userSelector);
  useEffect(() => {
    const checkIsFollowing = selfId => {
      if (user.followers.find(item => item === selfId)) {
        setisFollowing(true);
      } else {
        console.log('it is not here');
      }
    };
    checkIsFollowing(self.userId);
  }, []);

  const [isFollowing, setisFollowing] = useState(false);
  const follow = () => {
    setisFollowing(true);
    switchFollowing(user.uid);
  };
  return (
    <View style={styles.usercardcontainer}>
      <ProfilePhoto source={user.pplink} />
      <View style={{flexDirection: 'row'}}>
        <Text style={{paddingRight: 5}}> {user.username}</Text>
        <Icon name={'Check'} scale={0.7} />
      </View>
      <Text style={styles.shadytext}> {user.email}</Text>
      <View style={styles.usercardphotoscontainer}>
        {user.postlinks ? (
          <>
            <PhotoSized source={user.postlinks[0]} />
            <PhotoSized source={user.postlinks[1]} />
            <PhotoSized source={user.postlinks[2]} />
          </>
        ) : null}
      </View>
      <Text style={styles.shadytext}>Popular</Text>
      {!isFollowing ? (
        <SmallButton
          pressable={true}
          onPress={() => follow()}
          label={'Follow'}
        />
      ) : (
        <SmallButton pressable={false} label={'Following'} />
      )}
    </View>
  );
};
