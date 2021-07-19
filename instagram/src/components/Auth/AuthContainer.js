import React, {useEffect} from 'react';

import {Text, View, StatusBar} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import SignInScreen from './SignInScreen';
import {Colors} from './../../constants/Colors';
import HelpScreen from './HelpScreen';
import HelpCenter from './HelpCenter';
import styles from './styles';
import SignUpScreen from './UsernameScreen';
import UsernameScreen from './UsernameScreen';
import PasswordScreen from './PasswordScreen';
import FinalizeScreen from './FinalizeScreen';

import EmailScreen from './EmailScreen';

import CameraScreen from '../Camera/CameraScreen';
import {WelcomeScreen} from '../Blog/WelcomeScreen';
import {BlogHeader} from '../Blog/BlogHeader';
import {BlogFooter} from './../Blog/BlogFooter';
import BlogContainer from '../Blog/BlogContainer';
import HelpedScreen from './HelpedScreen';

const Auth = createStackNavigator();

const AuthContainer = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.mainWhite} />
      <Auth.Navigator screenOptions={{headerShown: false}}>
        <Auth.Screen name="Signin" component={SignInScreen} />

        <Auth.Screen name="Help" component={HelpScreen} />
        <Auth.Screen name="Helped" component={HelpedScreen} />
        <Auth.Screen
          name="Help Center"
          component={HelpCenter}
          options={{
            headerTitleStyle: {
              fontSize: styles.headertext.fontSize,
              fontWeight: styles.headertext.fontWeight,
              textAlignVertical: 'center',
              justifyContent: 'center',
            },
          }}
        />
        <Auth.Screen name="Username" component={UsernameScreen} />
        <Auth.Screen name="Password" component={PasswordScreen} />
        <Auth.Screen name="Finalize" component={FinalizeScreen} />
        <Auth.Screen name="Email" component={EmailScreen} />
      </Auth.Navigator>
    </>
  );
};

export default AuthContainer;
