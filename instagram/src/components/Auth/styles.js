import React from 'react';
import {StyleSheet} from 'react-native';

import {width as w, height as h, width} from '../../constants/Metrics';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    //paddingTop: w * 0.01,
    //justifyContent: 'center',
  },
  smalltextscontainer: {
    height: h * 0.05,
    width: w * 0.9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginTop: w * 0.02,
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
  button: {
    backgroundColor: 'purple',
    //borderRadius: 20,
    margin: w * 0.03,
    height: h * 0.07,
    marginTop: h * 0.04,
    width: w * 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titletext: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  imagebig: {
    width: w,
    flexWrap: 'wrap',
    resizeMode: 'contain',
    //aspectRatio: 1,
    //marginTop: w * 0.015, //borderRadius: w * 0.25,
  },
  text: {
    color: 'white',
  },

  textinput: {
    marginLeft: w * 0.04,
    marginRight: w * 0.03,
    paddingLeft: 5,
    color: 'purple',

    flex: 1,
  },
  textinputcontainer: {
    alignItems: 'center',
  },
  authinputcontainer: {
    height: h * 0.08,
    borderWidth: 0.5,
    padding: 0,
    paddingLeft: 10,
    width: w * 0.85,
    borderRadius: 20,
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
  },
  image: {
    width: w * 0.05,
    flexWrap: 'wrap',
    resizeMode: 'contain',
    aspectRatio: 1,
  },
});
