import React, {Component} from 'react';
import {View, Text} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth, {firebase} from '@react-native-firebase/auth';

import {
  AccessToken,
  GraphRequest,
  GraphRequestManager,
  LoginManager,
} from 'react-native-fbsdk';
import {setUserAndError} from '../redux/userReducer';

const logoutWithFacebook = () => {
  LoginManager.logOut();
  this.setState({userInfo: {}});
};

export const addUserToDb = (user, dispatch) => {
  console.log('adding to db', user);
  let account = {};
  account.email = user.email.toLowerCase();
  account.uid = user.id;
  account.username = user.name;
  account.phonenumber = null;
  account.country = 'United States';

  firestore()
    .collection('Users')
    .doc(user.id)
    .set(account)
    .then(() => {
      firestore()
        .collection('Users')
        .doc(user.id)
        .get()
        .then(function (snapshot) {
          console.log(snapshot.data());
          let newAccount = snapshot.data();

          dispatch(
            setUserAndError(
              newAccount.country,
              newAccount.username,
              newAccount.uid,
              newAccount.phonenumber,
              newAccount.email,
              'facebook',
              null,
            ),
          );
        })
        .then(() => {
          console.log('User account created & signed in!');
        });
    });
};

export const checkUserInDb = (user, dispatch) => {
  try {
    firestore()
      .collection('Users')
      .doc(user.id)
      .get()
      .then(function (snapshot) {
        if (snapshot.exists) {
          let newAccount = snapshot.data();
          console.log('user found and logging in');

          dispatch(
            setUserAndError(
              newAccount.country,
              newAccount.username,
              newAccount.uid,
              newAccount.phonenumber,
              newAccount.email,
              'facebook',
              null,
            ),
          );
        } else {
          addUserToDb(user, dispatch);
        }
      });
  } catch (error) {
    console.log('error reaching database');
  }
};

export const getInfoFromToken = (token, dispatch) => {
  const PROFILE_REQUEST_PARAMS = {
    fields: {
      string: 'id,name,first_name,last_name,email',
    },
  };
  const profileRequest = new GraphRequest(
    '/me',
    {token, parameters: PROFILE_REQUEST_PARAMS},
    (error, user) => {
      if (error) {
        console.log('login info has error: ' + error);
      } else {
        checkUserInDb(user, dispatch);
      }
    },
  );
  new GraphRequestManager().addRequest(profileRequest).start();
};
export const loginWithFacebook = dispatch => {
  // Attempt a login using the Facebook login dialog asking for default permissions.
  LoginManager.logInWithPermissions(['email']).then(
    login => {
      if (login.isCancelled) {
        console.log('Login cancelled');
      } else {
        AccessToken.getCurrentAccessToken().then(data => {
          const accessToken = data.accessToken.toString();
          getInfoFromToken(accessToken, dispatch);
        });
      }
    },
    error => {
      console.log('Login fail with error: ' + error);
    },
  );
};
