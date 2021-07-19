import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import styles from './styles';

export const PhotoPreview = ({source}) => {
  return <ImageBackground style={styles.photopreview} source={{uri: source}} />;
};
