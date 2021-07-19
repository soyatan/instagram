import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './styles';

export default SelectMultipleButton = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.buttonpr} onPress={onPress}>
      <Text style={styles.whitetext}>SELECT MULTIPLE</Text>
    </TouchableOpacity>
  );
};
