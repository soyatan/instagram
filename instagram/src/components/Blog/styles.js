import React from 'react';
import {StyleSheet} from 'react-native';

import {Colors} from '../../../constants/Colors';
import {width as w, height as h} from '../../../constants/Metrics';
import Fonts from '../../../constants/Fonts';

const {Families, Sizes} = Fonts;

export default styles = StyleSheet.create({
  statusbar: {
    backgroundColor: 'purple',
  },
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  boardborder: {
    width: w * 0.85 + w * 0.03,
    height: w * 0.85 + w * 0.03,
    borderRadius: w,

    borderWidth: w * 0.004,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  dimplboardborder: {},

  finishmodal: {
    width: w * 0.99,
    elevation: 100,
    flex: 1,
    position: 'absolute',
    top: h * 0.18,
    borderRadius: 15,
    borderWidth: w * 0.01,
    borderColor: 'white',
    height: h * 0.65,

    alignContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    color: 'white',
    fontFamily: Families.bold,
    fontSize: Sizes.eighteen,
  },
  image: {
    height: h * 0.1,
    width: w * 0.95,
    paddingTop: w * 0.05,
    //height:h*0.05,
    //flexWrap: 'wrap',
    //resizeMode: 'contain',
    //aspectRatio: 1,
    marginBottom: w * 0.1, //borderRadius: w * 0.25,
    marginTop: w * 0.01, //borderRadius: w * 0.25,
  },
  buttonsContainer: {
    flexDirection: 'row',

    width: w * 0.8,
    height: h * 0.1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  actionIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  boardcontainer: {
    width: w * 0.85,
    height: w * 0.85,
    borderRadius: w,

    borderWidth: w * 0.004,
    justifyContent: 'space-between',
  },
  firstrow: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingTop: w * 0.04,

    borderBottomWidth: w * 0.012,
    width: w * 0.74,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondrow: {
    flexDirection: 'row',
    alignSelf: 'center',

    borderBottomWidth: w * 0.012,
    width: w * 0.84,
    alignItems: 'center',
    justifyContent: 'center',
  },
  thirdrow: {
    flexDirection: 'row',
    alignSelf: 'center',

    borderBottomWidth: w * 0.012,
    width: w * 0.7531,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fourthrow: {
    flexDirection: 'row',
    alignSelf: 'center',

    width: w * 0.78,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: w * 0.04,
  },

  textNormal: {
    fontSize: Sizes.twentysix,
    fontFamily: Families.textNormal,
    color: Colors.mainBlack,
  },
  circle1: {
    top: 0,
    marginHorizontal: -w * 0.007,
    left: 0,
  },
  circle2: {
    position: 'absolute',
    top: 0,
    marginHorizontal: -w * 0.007,

    left: 0,
  },
  finishbuttonscontainer: {
    marginTop: h * 0.06,
    marginBottom: h * 0.05,
    width: w * 0.9,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  finishbuttonitem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    borderColor: 'white',
    borderRadius: w * 0.01,
  },
  finishbuttonitemlast: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    borderColor: 'white',
    borderRadius: w * 0.01,
  },

  circlecontainer: {
    position: 'relative',
  },
  iconsize: {
    width: w * 0.07,
  },
  iconsizeMedium: {
    width: w * 0.12,
  },
});
