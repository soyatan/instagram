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
  line: {
    height: w * 0.007,
    borderWidth: w * 0.005,
    margin: w * 0.01,
    flex: 1,
  },
  bigblacktext: {
    fontSize: Fonts.Sizes.twentytwo,
    color: Colors.mainBlack,
    fontWeight: 'bold',
    paddingHorizontal: w * 0.03,

    flex: 1,
  },
  chosenline: {
    height: w * 0.007,
    borderWidth: w * 0.005,
    backgroundColor: 'black',
    margin: w * 0.01,
    flex: 1,
  },
  storylinecontainer: {
    alignSelf: 'center',
    marginTop: w * 0.02,
    opacity: 0.3,
    flexDirection: 'row',
    //justifyContent: 'space-between',
    marginHorizontal: w * 0.2,
  },
  previewcontainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  storyscreen: {
    paddingTop: w * 0.01,
    flex: 1,
    backgroundColor: 'red',
  },
  storyscreenheader: {
    paddingVertical: w * 0.01,
    width: '100%',

    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: w * 0.01,
  },

  selftext: {
    marginTop: w * 0.01,
    fontSize: Fonts.Sizes.ten,
  },
  storycontainer: {
    //justifyContent: 'space-around',
    //alignItems: 'center',
    width: '100%',
    flexDirection: 'row',

    borderBottomColor: Colors.mainGray,
    borderBottomWidth: 0.4,
  },

  storycover: {
    alignItems: 'center',
    width: w * 0.17,
    height: w * 0.21,

    justifyContent: 'center',
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
  storycircleheader: {
    width: w * 0.07,
    height: w * 0.07,
    borderRadius: w,
    borderWidth: 0.5,
    marginRight: w * 0.02,
  },

  storycircleinnerself: {
    width: w * 0.11,
    height: w * 0.11,
    borderRadius: w,
    borderWidth: 0.5,
    marginTop: w * 0.01,
  },
  filledimage: {
    width: '100%',
    height: '100%',
    borderRadius: w,
  },
  shadytext: {
    fontSize: Fonts.Sizes.twelve,
    color: Colors.mainGray,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
