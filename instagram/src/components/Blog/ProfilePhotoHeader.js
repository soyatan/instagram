import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {TouchableIcon} from '../../Assets/Svgs/touchableIcon';
import {ImageLink} from '../../Assets/Images/index';

export const ProfilePhotoHeader = ({source, onPress}) => {
  return (
    <TouchableOpacity style={styles.profilephotoheader} onPress={onPress}>
      <Image style={styles.imagerounded} source={{uri: source}} />
    </TouchableOpacity>
  );
};
