import React from 'react';
import {StyleSheet} from 'react-native';

import {Colors} from '../../constants/Colors';
import {width as w, height as h} from '../../constants/Metrics';
import Fonts from '../../constants/Fonts';

const {Families, Sizes} = Fonts;

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: Colors.lightGray,
    paddingHorizontal: w * 0.03,
  },
  headercontainer: {
    width: '100%',

    height: h * 0.06,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
  },
  secondrow: {
    alignItems: 'center',

    width: '100%',
    flexDirection: 'row',
    height: h * 0.1,
    paddingHorizontal: w * 0.02,
    borderBottomWidth: 1,
  },
  imageBackground: {
    width: '150',
    height: '150',
  },
  firstrow: {
    alignItems: 'center',

    width: '100%',
    flexDirection: 'row',
    height: h * 0.15,
    paddingHorizontal: w * 0.02,
    borderBottomWidth: 1,
  },
  textinput: {
    flex: 1,
  },
  longtextcontainer: {
    width: w * 0.86,
    alignItems: 'center',
  },
  shadytext: {
    fontSize: Fonts.Sizes.twelve,
    color: Colors.mainGray,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  mediumblacktext: {
    fontSize: Fonts.Sizes.twentytwo,
    color: Colors.mainBlack,

    paddingHorizontal: w * 0.03,

    flex: 1,
  },
  bigblacktext: {
    fontSize: Fonts.Sizes.twentytwo,
    color: Colors.mainBlack,
    fontWeight: 'bold',
    paddingHorizontal: w * 0.03,

    flex: 1,
  },
  whitetext: {
    color: Colors.mainWhite,
    fontSize: Fonts.Sizes.fourteen,
    fontFamily: Fonts.Families.bold,
  },
  blacktext: {
    color: Colors.mainBlack,
    fontSize: Fonts.Sizes.fourteen,
    fontFamily: Fonts.Families.bold,
  },

  image: {
    width: '100%',
    height: '100%',
  },
  imagerounded: {
    width: '100%',
    height: '100%',

    borderRadius: w * 0.05,
  },
});
