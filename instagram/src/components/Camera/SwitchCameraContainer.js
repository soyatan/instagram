import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Icon} from '../../Assets/Svgs/icon';
import styles from './styles';

export const SwitchCameraContainer = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.switchcameracontainer} onPress={onPress}>
      <Icon name={'SwitchCamera'} scale={3} />
    </TouchableOpacity>
  );
};
