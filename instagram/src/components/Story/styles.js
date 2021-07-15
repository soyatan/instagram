import React from 'react';
import {StyleSheet} from 'react-native';

import {Colors} from '../../constants/Colors';
import {width as w, height as h} from '../../constants/Metrics';
import Fonts from '../../constants/Fonts';

const {Families, Sizes} = Fonts;

export default styles = StyleSheet.create({
  container: {
    //justifyContent: 'space-around',
    //alignItems: 'center',
    width: '100%',

    backgroundColor: Colors.lightGray,
    borderBottomColor: Colors.mainGray,
    borderBottomWidth: 0.4,
  },
  storycover: {
    alignItems: 'center',
    width: w * 0.2,
    height: w * 0.21,
  },
  storycircleouter: {
    width: w * 0.13,
    height: w * 0.13,
    borderRadius: w,
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  storycircleinner: {
    width: w * 0.11,
    height: w * 0.11,
    borderRadius: w,
    borderWidth: 0.5,
  },
});
