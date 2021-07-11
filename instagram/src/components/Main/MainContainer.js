import React, {useEffect, useState} from 'react';
import {StatusBar, BackHandler} from 'react-native';
import auth from '@react-native-firebase/auth';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import AuthContainer from '../Auth/AuthContainer';
import {useDispatch, useSelector} from 'react-redux';
import {setError, userSelector} from '../../redux/userReducer';

const Main = createStackNavigator();

export const MainContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const backAction = () => {
      dispatch(setError(null));
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  /*useEffect(() => {
    SplashScreen.hide();
  }, []);*/
  const [initializing, setInitializing] = useState(false);
  /*
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
*/
  const user = useSelector(userSelector);

  if (initializing) return null;

  return (
    <>
      <NavigationContainer>
        <Main.Navigator>
          {!user.isLoggedIn ? (
            <Main.Screen
              name="Auth"
              component={AuthContainer}
              options={{headerShown: false}}
            />
          ) : (
            <>
              <Main.Screen name="Collection" component={CollectionContainer} />
            </>
          )}
        </Main.Navigator>
      </NavigationContainer>
    </>
  );
};
