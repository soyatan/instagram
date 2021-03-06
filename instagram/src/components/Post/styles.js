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
  comment: {
    width: '100%',

    //    height: h * 0.06,
    marginVertical: w * 0.01,
    alignItems: 'flex-start',
    borderBottomWidth: 0.5,
    paddingBottom: w * 0.01,
  },
  commenttext: {
    textAlignVertical: 'center',
    width: w * 0.82,

    flexDirection: 'row',
  },
  commentscontainer: {
    flex: 1,
    width: w,
    alignSelf: 'center',
    paddingHorizontal: w * 0.03,
    alignItems: 'center',
    justifyContent: 'center',
    //marginHorizontal: w * 0.01,
  },
  secondrow: {
    alignItems: 'center',

    width: '100%',
    flexDirection: 'row',
    height: h * 0.1,
    paddingHorizontal: w * 0.02,
    borderBottomWidth: 1,
  },
  pppreviewcontainer: {
    marginTop: w * 0.2,
    alignItems: 'center',

    width: '100%',
    flexDirection: 'row',
    height: w,
    paddingHorizontal: w * 0.02,
  },
  galleryrow: {
    alignItems: 'center',
    marginTop: w * 0.2,
    width: '100%',

    height: h * 0.1,
    paddingHorizontal: w * 0.02,
  },
  gallerygridrow: {
    alignItems: 'center',

    width: '100%',
    flex: 1,
    backgroundColor: 'red',
    flexDirection: 'row',
    height: h * 0.1,
    paddingHorizontal: w * 0.01,
    borderBottomWidth: 1,
    marginBottom: w * 0.01,
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
  normaltext: {
    color: Colors.mainBlack,
    fontSize: Fonts.Sizes.fourteen,
    fontFamily: Fonts.Families.light,
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
  previewcontainer: {
    width: w,
    height: h * 0.5,
    borderWidth: 1,
  },
});
