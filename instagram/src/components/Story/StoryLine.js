import React, {useEffect} from 'react';
import {View, Text, FlatList, Image, ImageBackground} from 'react-native';
import {Icon} from '../../Assets/Svgs/icon';
import styles from './styles';
import {TouchableIcon} from '../../Assets/Svgs/touchableIcon';
import VideoPlayer from '../Camera/VideoPlayer';

export const StoryLine = ({route, isChosen}) => {
  return (
    <>
      <View style={isChosen ? styles.chosenline : styles.line}></View>
    </>
  );
};
