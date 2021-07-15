import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {Icon} from '../../Assets/Svgs/icon';
import styles from './styles';
import {TouchableIcon} from './../../Assets/Svgs/touchableIcon';

export const StoryCover = () => {
  return (
    <View style={styles.storycover}>
      <View style={styles.storycircleouter}>
        <View style={styles.storycircleinner}></View>
      </View>

      <Text>Ahmetcan</Text>
    </View>
  );
};
