import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import {TouchableIcon} from '../../Assets/Svgs/touchableIcon';
export const ProfilePhoto = ({source}) => {
  return (
    <View style={styles.profilephotocontainer}>
      <Image style={styles.imageroundedmedium} source={{uri: source}} />
    </View>
  );
};
