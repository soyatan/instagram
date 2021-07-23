import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Icon} from '../../Assets/Svgs/icon';
import styles from './styles';

export const FlashContainer = ({onPress, flashMode}) => {
  return (
    <TouchableOpacity style={styles.flashcontainer} onPress={onPress}>
      <Icon
        name={
          flashMode == 3
            ? 'Flash_Auto'
            : flashMode == 1
            ? 'Flash_On'
            : flashMode == 0
            ? 'Flash_Off'
            : null
        }
        scale={1.3}
      />
    </TouchableOpacity>
  );
};
