import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './styles';

export default AuthButton = ({label, onPress, pressable}) => {
  return (
    <TouchableOpacity
      style={pressable ? styles.buttonpr : styles.button}
      onPress={onPress}>
      <Text style={styles.whitetext}>{label}</Text>
    </TouchableOpacity>
  );
};
