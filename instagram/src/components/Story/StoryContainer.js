import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {Icon} from '../../Assets/Svgs/icon';
import styles from './styles';
import {TouchableIcon} from './../../Assets/Svgs/touchableIcon';
import {StoryCover} from './StoryCover';
import {StoryCoverSelf} from './StoryCoverSelf';

export const StoryContainer = ({selfphotolink, navigation}) => {
  const addStory = () => {
    navigation.navigate('Camera', {type: 'story'});
  };

  return (
    <>
      <View style={styles.storycontainer}>
        <StoryCoverSelf source={selfphotolink} onPress={() => addStory()} />

        <View style={styles.storycontainer}>
          <StoryCover />
          <StoryCover />
        </View>
      </View>
    </>
  );
};
