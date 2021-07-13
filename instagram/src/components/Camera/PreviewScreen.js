import React from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import styles from './styles';

export const PreviewScreen = ({source}) => {
  console.log(source);
  return <ImageBackground style={styles.imageBackground} source={source} />;
};
