import React from 'react';
import {StyleSheet} from 'react-native';

import {width as w, height as h, width} from '../../constants/Metrics';
import {Colors} from './../../constants/Colors';
import Fonts from '../../constants/Fonts';
const {Families, Sizes} = Fonts;

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    //paddingTop: w * 0.01,
    //justifyContent: 'center',
    backgroundColor: Colors.mainWhite,
  },
  header: {
    alignItems: 'center',
    marginTop: w * 0.02,
  },
  titletext: {
    fontSize: w * 0.04,
    fontWeight: 'bold',
    color: Colors.mainGray,
  },
  logotext: {
    fontSize: w * 0.09,
    fontFamily: Families.stylish,
    //fontWeight: 'bold',
    color: Colors.mainBlack,
  },
  logocontainer: {marginTop: h * 0.2},
  authinputcontainer: {
    height: h * 0.06,
    borderWidth: 0.7,
    opacity: 0.5,
    paddingRight: w * 0.02,

    //paddingLeft: 10,
    width: w * 0.86,
    borderRadius: w * 0.03,
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
  },
  textinput: {
    marginLeft: w * 0.02,
    marginRight: w * 0.03,

    flex: 1,
  },
  whitetext: {
    color: Colors.mainWhite,
    fontSize: Fonts.Sizes.eighteen,
    fontFamily: Fonts.Families.bold,
  },
  button: {
    backgroundColor: Colors.lightBlue,
    //borderRadius: 20,
    margin: w * 0.03,
    height: h * 0.06,
    marginTop: h * 0.04,
    width: w * 0.86,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: w * 0.03,
  },
  blacktext: {
    fontSize: Fonts.Sizes.twelve,
    color: Colors.mainBlack,
    fontWeight: 'bold',
  },
  shadytext: {
    fontSize: Fonts.Sizes.twelve,
    color: Colors.mainGray,
    fontWeight: 'bold',
  },
  ortext: {
    fontSize: Fonts.Sizes.twelve,
    color: Colors.mainGray,
    fontWeight: 'bold',
    marginTop: w * 0.05,
    marginBottom: w * 0.05,
  },
  bluetext: {
    fontSize: Fonts.Sizes.twelve,
    color: Colors.darkBlue,
    fontWeight: 'bold',
    marginTop: w * 0.05,
    marginBottom: w * 0.05,
  },
  smalltextscontainer: {
    height: h * 0.05,
    width: w * 0.9,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  signInButton: {
    width: w * 0.87,
    height: w * 0.15,
    borderWidth: w * 0.02,
    borderRadius: w * 0.4,
  },
  errormessagecontainer: {
    marginTop: 20,
    marginLeft: 25,
    marginRight: 25,
    justifyContent: 'center',
    textAlignVertical: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  googlebutton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: h * 0.02,
  },

  imagebig: {
    width: w,
    flexWrap: 'wrap',
    resizeMode: 'contain',
    //aspectRatio: 1,
    //marginTop: w * 0.015, //borderRadius: w * 0.25,
  },

  textinputcontainer: {
    alignItems: 'center',
  },

  image: {
    width: w * 0.05,
    flexWrap: 'wrap',
    resizeMode: 'contain',
    aspectRatio: 1,
  },
});
