import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import {TouchableIcon} from '../../Assets/Svgs/touchableIcon';
import {ImageLink} from './../../Assets/Images/index';

export const ProfilePhotoSmall = () => {
  return (
    <View style={styles.profilephotosmallcontainer}>
      <Image style={styles.imagerounded} source={ImageLink['imaj']} />
    </View>
  );
};
