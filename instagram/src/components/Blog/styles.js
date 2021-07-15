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
  },
  blogheader: {
    width: '100%',
    height: h * 0.07,
    backgroundColor: Colors.lightGray,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: w * 0.03,
    borderBottomColor: Colors.lightGray,
    borderBottomWidth: 0.4,
  },
  doubletextstack: {height: '100%', flex: 4, backgroundColor: 'blue'},
  optionsbuttoncontainer: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerlogocontainer: {
    flexDirection: 'row',

    height: '100%',
    alignItems: 'center',
    width: w * 0.35,
    justifyContent: 'space-between',
    paddingRight: w * 0.04,
  },
  postimagecontainer: {
    width: '100%',
    height: w,
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
  shadytexttoleft: {
    fontSize: Fonts.Sizes.twelve,
    color: Colors.mainGray,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: w * 0.03,
    marginBottom: w * 0.02,
  },
  datetext: {
    fontSize: Fonts.Sizes.ten,
    color: Colors.mainGray,
    fontFamily: Fonts.Families.medium,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: w * 0.03,
    marginBottom: w * 0.02,
  },
  blogfooter: {
    width: '100%',
    borderTopColor: Colors.mainGray,
    borderTopWidth: 0.5,
    height: h * 0.07,
    backgroundColor: Colors.lightGray,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  logotext: {
    fontSize: w * 0.07,
    fontFamily: Families.stylish,
    //fontWeight: 'bold',
    color: Colors.mainBlack,
  },
  bigblacktext: {
    fontSize: Fonts.Sizes.twentytwo,
    color: Colors.mainBlack,
    marginBottom: h * 0.02,
    marginTop: h * 0.05,
  },
  usercardcontainer: {
    marginTop: h * 0.03,
    width: '75%',
    height: h * 0.5,
    borderWidth: 1,
    borderRadius: w * 0.05,
    alignItems: 'center',
    paddingTop: w * 0.04,
    backgroundColor: Colors.mainWhite,
  },
  postcardcontainer: {width: '100%', height: h * 0.65},
  postcardtopcontainer: {
    height: h * 0.08,
    alignItems: 'center',

    flexDirection: 'row',
  },
  more: {
    backgroundColor: 'yellow',
  },
  postcardbottomcontainer: {
    height: h * 0.08,
    alignItems: 'center',
    backgroundColor: 'gray',
    flexDirection: 'row',
    paddingHorizontal: w * 0.03,
  },
  commentscontainer: {
    height: h * 0.06,
    flexDirection: 'row',
    paddingHorizontal: w * 0.03,
  },
  likecontainer: {backgroundColor: 'red', paddingHorizontal: w * 0.03},
  profilephotocontainer: {
    borderRadius: w,
    width: w * 0.2,
    height: w * 0.2,
    borderWidth: 0.5,
    marginBottom: w * 0.03,
  },
  profilephotosmallcontainer: {
    borderRadius: w,
    width: w * 0.1,
    height: w * 0.1,
    borderWidth: 0.5,
    marginHorizontal: w * 0.03,
  },
  photosized: {
    width: w * 0.2,
    height: w * 0.2,
    borderWidth: 0.5,
  },
  usercardphotoscontainer: {
    marginTop: w * 0.1,
    marginBottom: w * 0.05,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: Colors.mainWhite,
    borderWidth: 0.4,
    //borderRadius: 20,
    margin: w * 0.01,
    height: h * 0.05,
    marginTop: h * 0.02,
    width: w * 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: w * 0.03,
  },
  buttonpr: {
    backgroundColor: Colors.darkBlue,
    //borderRadius: 20,
    margin: w * 0.01,
    height: h * 0.05,
    marginTop: h * 0.02,
    width: w * 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: w * 0.03,
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
  commenttextheader: {color: Colors.mainBlack},
  commenttext: {color: Colors.mainBlack, fontFamily: Fonts.Families.medium},
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
