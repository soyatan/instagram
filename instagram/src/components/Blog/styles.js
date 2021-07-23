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
    justifyContent: 'center',
  },
  userprofilecontainer: {
    flex: 1,
    //justifyContent: 'space-around',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: Colors.lightGray,
    paddingHorizontal: w * 0.025,
    //flexDirection: 'row',
  },
  userprofiletopcontainer: {
    //justifyContent: 'space-around',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  userprofrightcontainer: {
    height: w * 0.2,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  searchscreencontainer: {
    flex: 1,
    //justifyContent: 'space-around',

    backgroundColor: Colors.lightGray,
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: w * 0.02,
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
  doubletextstack: {height: '100%', flex: 4},
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
    width: w,
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
  commentcontainer: {
    width: '100%',

    borderTopColor: Colors.mainGray,

    height: h * 0.05,
    backgroundColor: Colors.lightGray,
    flexDirection: 'row',
    justifyContent: 'flex-start',
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
  bigblacktextnomargin: {
    fontSize: Fonts.Sizes.eighteen,
    color: Colors.mainBlack,
    marginBottom: h * 0.02,
    paddingLeft: w * 0.02,
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
  usercardcontainersmall: {
    marginTop: h * 0.03,
    paddingHorizontal: w * 0.1,
    height: h * 0.2,
    borderWidth: 1,
    borderRadius: w * 0.05,
    alignItems: 'center',
    paddingTop: w * 0.04,
    backgroundColor: Colors.mainWhite,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  postcardcontainer: {width: '100%'},
  postcardtopcontainer: {
    height: h * 0.06,
    alignItems: 'center',

    flexDirection: 'row',
  },

  postcardbottomcontainer: {
    height: h * 0.06,
    alignItems: 'stretch',
    flexDirection: 'row',
    paddingHorizontal: w * 0.03,
  },
  descriptioncontainer: {
    flexDirection: 'row',
    marginHorizontal: w * 0.03,
    marginBottom: w * 0.02,
  },
  likecontainer: {paddingHorizontal: w * 0.03},
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
    marginBottom: w * 0.01,
  },
  profilephotosmallercontainer: {
    borderRadius: w,
    width: w * 0.06,
    height: w * 0.06,
    borderWidth: 0.5,
    marginHorizontal: w * 0.03,
    marginBottom: w * 0.01,
  },
  profilephotoheader: {
    borderRadius: w,
    width: w * 0.07,
    height: w * 0.07,
    borderWidth: 3,
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
  blacktextprofile: {
    color: Colors.mainBlack,
    fontSize: Fonts.Sizes.fourteen,
    fontFamily: Fonts.Families.bold,
    textAlign: 'center',
    paddingVertical: w * 0.01,
  },
  commenttextheader: {color: Colors.mainBlack},
  commenttext: {
    color: Colors.mainBlack,
    fontFamily: Fonts.Families.medium,
    fontWeight: '100',
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
  imageroundedmedium: {
    width: '100%',
    height: '100%',

    borderRadius: w * 0.5,
  },
});
