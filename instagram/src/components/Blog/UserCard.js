import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {TouchableIcon} from '../../Assets/Svgs/touchableIcon';
import {ProfilePhoto} from './ProfilePhoto';
import {Icon} from '../../Assets/Svgs/icon';
import {PhotoSized} from './PhotoSized';
import SmallButton from './SmallButton';

export const UserCard = () => {
  return (
    <View style={styles.usercardcontainer}>
      <ProfilePhoto />
      <View style={{flexDirection: 'row'}}>
        <Text style={{paddingRight: 5}}> necati.soyata</Text>
        <Icon name={'Check'} scale={0.7} />
      </View>
      <Text style={styles.shadytext}> Necati Soyata</Text>
      <View style={styles.usercardphotoscontainer}>
        <PhotoSized />
        <PhotoSized />
        <PhotoSized />
      </View>
      <Text style={styles.shadytext}>Popular</Text>
      <SmallButton pressable={true} label={'Follow'} />
    </View>
  );
};
