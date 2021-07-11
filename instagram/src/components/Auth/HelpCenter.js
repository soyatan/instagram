import React, {useState, useEffect} from 'react';
//import LinearGradient from 'react-native-linear-gradient';
import {Text, View, TouchableOpacity, Image, Button} from 'react-native';
import styles from './styles';

const HelpCenter = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.bigblacktext}>Help Center</Text>

      <Text style={styles.shadytext}>
        Help center is not available at the moment...
      </Text>
    </View>
  );
};

export default HelpCenter;
