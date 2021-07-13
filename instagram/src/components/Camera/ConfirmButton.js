import React from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';
import styles from './styles';

export const ConfirmButton = ({onPress}) => {
  return (
    <View style={styles.okButtonContainer}>
      <Button title="TAMAM" onPress={onPress} />
    </View>
  );
};
