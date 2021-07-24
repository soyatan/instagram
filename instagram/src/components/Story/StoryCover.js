import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {Icon} from '../../Assets/Svgs/icon';
import styles from './styles';
import {TouchableIcon} from './../../Assets/Svgs/touchableIcon';

export const StoryCover = ({source, onPress, username}) => {
  return (
    <TouchableOpacity style={styles.storycover} onPress={onPress}>
      <View style={styles.storycircleouter}>
        <View style={styles.storycircleinner}>
          <Image style={styles.filledimage} source={{uri: source}} />
        </View>
      </View>

      <Text style={styles.selftext}>{username}</Text>
    </TouchableOpacity>
  );
};
