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
  switchcameracontainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignSelf: 'center',
    bottom: h * 0.08,
    elevation: 330,
    //padding: w * 0.1,
    width: w * 0.1,
    height: w * 0.13,
    borderRadius: w,
    zIndex: 1,
    alignItems: 'center',
    left: w * 0.1,
  },

  preview: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  photopreview: {width: w * 0.2, height: w * 0.2, borderWidth: 1},
  flashcontainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignSelf: 'center',
    top: h * 0.02,
    elevation: 330,
    //padding: w * 0.1,
    width: w * 0.2,
    height: w * 0.13,
    borderRadius: w,
    zIndex: 1,
    alignItems: 'center',
  },

  capturecontainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignSelf: 'center',
    bottom: h * 0.05,
    elevation: 330,
    borderWidth: 1,
    //padding: w * 0.1,
    width: w * 0.23,
    height: w * 0.23,
    backgroundColor: '#fff',
    borderRadius: w,
    zIndex: 1,
  },
  capture: {
    backgroundColor: '#fff',
    borderRadius: w,
    elevation: 350,
    width: w * 0.18,
    height: w * 0.18,
    alignSelf: 'center',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  capturevideo: {
    backgroundColor: '#a21e1e',
    elevation: 350,
    width: w * 0.05,
    height: w * 0.05,
    alignSelf: 'center',
    borderWidth: 1,
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
    height: h,

    opacity: 0.4,
    borderWidth: 1,
    elevation: 200,
    position: 'absolute',
    top: -h * 0.1,
    alignSelf: 'center',
  },
  firstcameragrid: {
    flexGrow: 1,
    backgroundColor: Colors.mainBlack,
    opacity: 0.7,
  },
  secondcameragrid: {
    height: w * 0.333,
    width: w,
    opacity: 1,
    flexDirection: 'row',
  },
  thirdcameragrid: {
    flexGrow: 1,
    backgroundColor: Colors.mainBlack,
    opacity: 0.7,
    elevation: -200,
  },
  grid: {
    borderWidth: 1,
    borderColor: 'white',
    width: w * 0.33,
    height: w * 0.33,
  },
});
