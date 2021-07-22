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

export const UserCardSmall = ({user, switchFollowing}) => {
  const [isFollowing, setisFollowing] = useState(false);
  const [isSelf, setisSelf] = useState(false);
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
  }, [user]);

  useEffect(() => {
    const checkIsSelf = selfId => {
      if (selfId === user.uid) {
        setisSelf(true);
      }
    };
    checkIsSelf(self.userId);
  }, []);

  const follow = () => {
    setisFollowing(true);
    switchFollowing(user.uid);
  };
  return (
    <View style={styles.usercardcontainersmall}>
      <ProfilePhoto source={user.pplink} />
      <View style={{flexDirection: 'column', alignItems: 'center', flex: 1}}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{paddingRight: 5}}> {user.username}</Text>
          <Icon name={'Check'} scale={0.7} />
        </View>
        <Text style={styles.shadytext}> {user.email}</Text>
        <View style={{alignSelf: 'center'}}>
          {!isSelf && !isFollowing ? (
            <SmallButton
              pressable={true}
              onPress={() => follow()}
              label={'Follow'}
            />
          ) : !isSelf && isFollowing ? (
            <SmallButton pressable={false} label={'Following'} />
          ) : null}
        </View>
      </View>
    </View>
  );
};
