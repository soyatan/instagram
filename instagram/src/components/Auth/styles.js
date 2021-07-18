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

    height: h * 0.04,
  },
  checkbox: {alignSelf: 'center'},
  titletext: {
    fontSize: w * 0.04,
    fontWeight: 'bold',
    color: Colors.mainGray,
  },
  headertext: {
    fontSize: w * 0.06,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    color: Colors.mainBlack,
    paddingLeft: w * 0.03,
  },
  logotext: {
    fontSize: w * 0.09,
    fontFamily: Families.stylish,
    //fontWeight: 'bold',
    color: Colors.mainBlack,
  },
  logocontainer: {marginTop: h * 0.14, height: h * 0.07},
  remembercontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: w * 0.03,
    left: 0,
    width: w * 0.86,
  },
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
  longtextcontainer: {
    width: w * 0.86,
    alignItems: 'center',
  },
  whitetext: {
    color: Colors.mainWhite,
    fontSize: Fonts.Sizes.fourteen,
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
  buttonpr: {
    backgroundColor: Colors.darkBlue,
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
  bigblacktext: {
    fontSize: Fonts.Sizes.twentytwo,
    color: Colors.mainBlack,
    marginBottom: h * 0.02,
    marginTop: h * 0.1,
  },
  shadytext: {
    fontSize: Fonts.Sizes.twelve,
    color: Colors.mainGray,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  ortext: {
    fontSize: Fonts.Sizes.twelve,
    color: Colors.mainGray,
    fontWeight: 'bold',
    marginTop: w * 0.05,
    marginBottom: w * 0.05,
    height: h * 0.03,
  },
  bluetext: {
    fontSize: Fonts.Sizes.fourteen,
    color: Colors.darkBlue,
    fontWeight: 'bold',
  },
  bottombluetext: {
    fontSize: Fonts.Sizes.ten,
    color: Colors.darkBlue,
    fontWeight: 'bold',
  },
  bottomtextcontainer: {
    marginTop: h * 0.3,
  },
  bottomtextcontainerdeep: {
    marginTop: h * 0.55,
  },

  smalltextscontainer: {
    height: h * 0.05,
    width: w * 0.9,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  cameracontainer: {
    borderWidth: 1,
    padding: w * 0.05,
    borderRadius: w * 0.3,
    marginTop: h * 0.1,
  },
  footer: {
    marginBottom: w * 0.05,
    alignItems: 'center',
    justifyContent: 'flex-end',

    bottom: 0,
    flexGrow: 1,
    width: w * 0.86,
  },
  secondoptioncontainer: {
    flexDirection: 'row',
    borderTopWidth: 1,
    width: w * 0.86,
    justifyContent: 'center',
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

  textinputcontainer: {
    alignItems: 'center',
  },
});
