import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import {TouchableIcon} from './../../Assets/Svgs/touchableIcon';
export const PhotoSized = ({source}) => {
  return (
    <View style={styles.photosized}>
      <Image style={styles.image} source={{uri: source}} />
    </View>
  );
};
