import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {Icon} from '../../Assets/Svgs/icon';
import styles from './styles';
import {TouchableIcon} from './../../Assets/Svgs/touchableIcon';
import {StoryCover} from './StoryCover';

export const StoryContainer = () => {
  return (
    <View style={styles.container}>
      <StoryCover />
    </View>
  );
};
