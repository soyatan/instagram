import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {Icon} from '../../Assets/Svgs/icon';
import styles from './styles';
import {TouchableIcon} from './../../Assets/Svgs/touchableIcon';
import {StoryCover} from './StoryCover';
import {StoryCoverSelf} from './StoryCoverSelf';

export const StoryContainer = ({
  selfphotolink,
  navigation,
  stories,
  selfname,
  selfid,
}) => {
  //console.log(stories, selfid);

  const [otherStories, setotherStories] = useState([]);

  const [selfStories, setselfStories] = useState([]);
  useEffect(() => {
    const findSelfStories = () => {
      setselfStories(
        stories.find(storylist =>
          storylist.find(story => story.posterId === selfid),
        ),
      );
    };
    const findOtherstories = () => {
      setotherStories(
        stories.filter(storylist => {
          //console.log(storylist);
          if (storylist.length > 0) {
            return storylist.find(story => story.posterId !== selfid);
          } else {
          }
        }),
      );
    };
    findSelfStories();
    findOtherstories();
  }, [stories]);
  const showSelfStory = () => {
    navigation.navigate('Post', {
      screen: 'Story',
      params: {storylist: selfStories},
    });
  };
  const showStories = index => {
    navigation.navigate('Post', {
      screen: 'Story',
      params: {storylist: otherStories[index]},
    });
  };
  return (
    <>
      <View style={styles.storycontainer}>
        <StoryCoverSelf
          source={selfphotolink}
          selfname={selfname}
          onPress={() => showSelfStory()}
          stories={selfStories}
        />
        <FlatList
          horizontal={true}
          style={styles.storycontainer}
          data={otherStories}
          renderItem={({item, index}) => {
            return (
              <StoryCover
                source={item[0].pplink}
                username={item[0].posterName}
                onPress={() => showStories(index)}
              />
            );
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </>
  );
};
