import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

export const CaptureButton = ({onPress, onLongPress, isVideoRecording}) => {
  return (
    <TouchableOpacity
      style={styles.capturecontainer}
      onPress={onPress}
      onLongPress={onLongPress}>
      <View style={styles.capture}>
        {isVideoRecording ? <View style={styles.capturevideo}></View> : null}
      </View>
    </TouchableOpacity>
  );
};
