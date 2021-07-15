import React from 'react';
import {View, Text} from 'react-native';
import {Icon} from '../../Assets/Svgs/icon';
import styles from './styles';
import {TouchableIcon} from './../../Assets/Svgs/touchableIcon';

export const BlogFooter = () => {
  return (
    <View style={styles.blogfooter}>
      <TouchableIcon
        name={'Home'}
        scale={1.2}
        onPress={() => console.log('home')}
      />
      <TouchableIcon name={'Search'} scale={1.2} />
      <TouchableIcon name={'Video'} scale={1.2} />
      <TouchableIcon name={'Store'} scale={1.2} />
      <TouchableIcon name={'User'} scale={1.2} />
    </View>
  );
};
