import React from 'react';
import {StyleSheet} from 'react-native';

import {width as w, height as h, width} from '../../constants/Metrics';
import {Colors} from './../../constants/Colors';
import Fonts from '../../constants/Fonts';
const {Families, Sizes} = Fonts;

export default styles = StyleSheet.create({
  cameracontainer: {
    width: '100%',
    height: h * 0.9,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capturecontainer: {
    flex: 0,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    bottom: 10,
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  preview: {
    flex: 1,
  },
  buttonContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 50,
    right: 0,
    left: 0,
    alignItems: 'center',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
  },
  okButtonContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  cameragridcontainer: {
    width: w,
    height: w * 0.9,
    backgroundColor: 'red',
    opacity: 0.3,
    borderWidth: 1,
    elevation: 200,
    position: 'absolute',
    top: h * 0.2,
    alignSelf: 'center',
  },
});
