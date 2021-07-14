import React from 'react';
import {View, Text} from 'react-native';
import {Icon} from '../../Assets/Svgs/icon';
import styles from './styles';
export const BlogFooter = () => {
  return (
    <View style={styles.blogfooter}>
      <Icon name={'Home'} scale={1.5} />
      <Icon name={'Facebook'} scale={1.5} />
      <Icon name={'Facebook'} scale={1.5} />
      <Icon name={'Facebook'} scale={1.5} />
      <Icon name={'Facebook'} scale={1.5} />
    </View>
  );
};
