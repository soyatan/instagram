import React, {useEffect} from 'react';

import {Text, View, StatusBar} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import SignInScreen from './SignInScreen';
import {Colors} from './../../constants/Colors';

const Auth = createStackNavigator();

const AuthContainer = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.mainWhite} />
      <Auth.Navigator screenOptions={{headerShown: false}}>
        <Auth.Screen name="Signin" component={SignInScreen} />
      </Auth.Navigator>
    </>
  );
};

export default AuthContainer;
