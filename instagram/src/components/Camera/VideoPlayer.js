import React, {useRef} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Icon} from '../../Assets/Svgs/icon';
import styles from './styles';
import Video from 'react-native-video';
const VideoPlayer = ({source}) => {
  const videoplay = useRef();
  return (
    <View style={{alignItems: 'center', flex: 1, justifyContent: 'center'}}>
      <Video
        source={{
          uri: source,
          cache: true,
        }}
        style={{
          width: '100%',
          height: '100%',
        }}
        controls={false}
        ref={videoplay}
      />
    </View>
  );
};

export default React.memo(VideoPlayer);
