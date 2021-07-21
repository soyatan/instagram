import React from 'react';
import {View, Text} from 'react-native';
import {Icon} from '../../Assets/Svgs/icon';
import styles from './styles';
import {TouchableIcon} from './../../Assets/Svgs/touchableIcon';
import {useNavigation} from '@react-navigation/native';

export const BlogFooter = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.blogfooter}>
      <TouchableIcon
        name={'Home'}
        scale={1.2}
        onPress={() => navigation.navigate('Welcome')}
      />
      <TouchableIcon
        name={'Search'}
        scale={1.2}
        onPress={() => navigation.navigate('Search')}
      />
      <TouchableIcon name={'Video'} scale={1.2} />
      <TouchableIcon name={'Store'} scale={1.2} />
      <TouchableIcon name={'User'} scale={1.2} />
    </View>
  );
};
