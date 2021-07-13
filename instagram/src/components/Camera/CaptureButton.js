import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

export const CaptureButton = ({onPress}) => {
  return (
    <View style={styles.capturecontainer}>
      <TouchableOpacity onPress={onPress} style={styles.capture}>
        <Text style={{fontSize: 14}}> SNAP </Text>
      </TouchableOpacity>
    </View>
  );
};
