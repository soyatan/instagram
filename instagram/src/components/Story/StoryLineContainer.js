import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Image, ImageBackground} from 'react-native';
import {Icon} from '../../Assets/Svgs/icon';
import styles from './styles';
import {TouchableIcon} from '../../Assets/Svgs/touchableIcon';
import VideoPlayer from '../Camera/VideoPlayer';
import {StoryLine} from './StoryLine';

export const StoryLineContainer = ({list, storyNo}) => {
  const Render = () =>
    list.map((item, index) => {
      const isChosen = () => {
        if (index === storyNo) {
          return true;
        } else {
          return false;
        }
      };
      return <StoryLine key={index.toString()} isChosen={isChosen()} />;
    });

  return (
    <View style={styles.storylinecontainer}>
      <Render />
    </View>
  );
};
