import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  Animated,
  TouchableOpacity,
  Easing,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';

import {useDispatch, useSelector} from 'react-redux';
import Sound from 'react-native-sound';
import {BoardContainer} from './BoardContainer';
import {Grads} from '../../../constants/Colors';
import {SVGS} from '../../../Assets/Svgs';
import {width} from '../../../constants/Metrics';


export const GameMainContainer = () => {
 
  return (
  <View>
    <Text>Merhaba</Text>
  </View>
};
