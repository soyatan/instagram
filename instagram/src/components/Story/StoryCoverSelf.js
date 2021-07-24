import React from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import {Icon} from '../../Assets/Svgs/icon';
import styles from './styles';
import {TouchableIcon} from '../../Assets/Svgs/touchableIcon';

export const StoryCoverSelf = ({source, onPress, selfname}) => {
  return (
    <View style={styles.storycover}>
      <TouchableOpacity onPress={onPress} style={styles.storycircleinnerself}>
        <Image style={styles.filledimage} source={{uri: source}} />
      </TouchableOpacity>

      <Text style={styles.selftext}>{selfname}</Text>
    </View>
  );
};
