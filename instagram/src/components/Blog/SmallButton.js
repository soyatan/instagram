import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './styles';

export default SmallButton = ({label, onPress, pressable}) => {
  return (
    <TouchableOpacity
      style={pressable ? styles.buttonpr : styles.button}
      onPress={onPress}>
      <Text style={pressable ? styles.whitetext : styles.blacktext}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};
