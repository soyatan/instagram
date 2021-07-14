import React from 'react';
import {StyleSheet} from 'react-native';

import {Colors} from '../../constants/Colors';
import {width as w, height as h} from '../../constants/Metrics';
import Fonts from '../../constants/Fonts';

const {Families, Sizes} = Fonts;

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  blogheader: {
    width: '100%',
    height: h * 0.15,
    backgroundColor: Colors.lightGray,
  },
  blogfooter: {
    width: '100%',
    height: h * 0.1,
    backgroundColor: Colors.mainPink,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
