import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  ImageBackground,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {Icon} from '../../Assets/Svgs/icon';
import styles from './styles';
import {TouchableIcon} from '../../Assets/Svgs/touchableIcon';
import VideoPlayer from '../Camera/VideoPlayer';
import {StoryLineContainer} from './StoryLineContainer';

export const StoryScreen = ({navigation, route}) => {
  const [storyShowing, setstoryShowing] = useState([]);
  const [storyNo, setstoryNo] = useState(0);
  const [timeTag, settimeTag] = useState('');
  const storylist = route.params.storylist;
  useEffect(() => {
    setstoryShowing(route.params.storylist[0]);
    setstoryNo(0);
  }, [route]);

  useEffect(() => {
    const calculateTimeText = item => {
      const timePassed = (-item.postdate + Date.now()) / 1000;

      if (Math.round(timePassed) <= 60) {
        settimeTag(`${Math.round(timePassed)} seconds ago`);
      } else if (Math.round(timePassed) <= 3600) {
        settimeTag(`${Math.round(timePassed / 60)} minutes ago`);
      } else if (
        (Math.round(timePassed) > 3600) &
        (Math.round(timePassed) < 7200)
      ) {
        settimeTag(`1 hour ago`);
      } else if (
        (Math.round(timePassed) >= 7200) &
        (Math.round(timePassed) < 86400)
      ) {
        settimeTag(`${Math.round(timePassed / 3600)} hours ago`);
      } else if (
        (Math.round(timePassed) >= 86400) &
        (Math.round(timePassed) < 172800)
      ) {
        settimeTag(`1 day ago`);
      } else {
        settimeTag(`${Math.round(timePassed / 86400)} days ago`);
      }
    };
    if (storyShowing.postdate) {
      calculateTimeText(storyShowing);
    }
  }, [storyShowing]);
  const switchStory = () => {
    if (storyNo < storylist.length - 1) {
      setstoryShowing(storylist[storyNo + 1]);
      setstoryNo(storyNo + 1);
    } else {
      navigation.goBack();
    }
  };
  return (
    <>
      <TouchableWithoutFeedback
        style={styles.previewcontainer}
        onPress={() => switchStory()}>
        <ImageBackground style={styles.image} source={{uri: storyShowing.link}}>
          <View style={styles.storyscreenheader}>
            <View style={styles.storycircleheader}>
              <Image
                style={styles.filledimage}
                source={{uri: storylist[0].pplink}}
              />
            </View>

            <Text>{`${storyShowing.posterName}  `}</Text>
            <Text style={styles.shadytext}>{timeTag}</Text>
          </View>
          <StoryLineContainer list={storylist} storyNo={storyNo} />
          <View style={{alignSelf: 'flex-end', marginTop: 50, marginRight: 30}}>
            <Text style={styles.shadytext}>{storylist[storyNo].location}</Text>
          </View>
          <View
            style={{
              alignSelf: 'center',
              position: 'absolute',
              bottom: 45,
              marginRight: 30,
            }}>
            <Text style={styles.bigblacktext}>{storylist[storyNo].notes}</Text>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </>
  );
};
