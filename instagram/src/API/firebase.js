import auth, {firebase} from '@react-native-firebase/auth';

import {setError, setUserAndError, signOutAction} from '../redux/userReducer';
import database from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';
import {FETCH_POSTS_REQUEST} from '../redux/postsReducer';
import {fetchPostsRequest} from './../redux/postsReducer';
const usersCollection = firestore().collection('Users');

export const createUser = (
  dispatch,
  country,
  username,
  email,
  password,
  phonenumber,
) => {
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(authData => {
      let account = {};
      account.email = email.toLowerCase();
      account.uid = authData.user.uid;
      account.username = username;
      account.phonenumber = phonenumber;
      account.country = country;

      firestore()
        .collection('Users')
        .doc(authData.user.uid)
        .set(account)
        .then(() => {
          firestore()
            .collection('Users')
            .doc(authData.user.uid)
            .get()
            .then(function (snapshot) {
              let newAccount = snapshot.data();

              dispatch(
                setUserAndError(
                  newAccount.country,
                  newAccount.username,
                  newAccount.uid,
                  newAccount.phonenumber,
                  newAccount.email,
                  'firebase',
                  null,
                ),
              );
            })
            .then(() => {
              console.log('User account created & signed in!');
            });
        });
    })

    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        dispatch(setError('That email address is already in use!'));
      }

      if (error.code === 'auth/invalid-email') {
        dispatch(setError('That email address is invalid!'));
      }

      console.log(error);
    });
};

export const signOutUser = dispatch => {
  auth()
    .signOut()
    .then(() => dispatch(signOutAction()))
    .then(console.log('loggingout by firebase'));
};

export const signInUser = (dispatch, type, userinfo, password) => {
  //console.log(type, userinfo, password);
  //phone username
  const checkAuth = user => {
    auth()
      .signInWithEmailAndPassword(user.email, password)
      .then(authData => {
        firestore()
          .collection('Users')
          .doc(authData.user.uid)
          .get()
          .then(function (snapshot) {
            let newAccount = snapshot.data();

            dispatch(
              setUserAndError(
                newAccount.country,
                newAccount.username,
                newAccount.uid,
                newAccount.phonenumber,
                newAccount.email,
                'firebase',
                null,
              ),
            );
          })
          .then(() => {
            console.log('User account signed in!');
          });
      })
      .catch(error => {
        if (error.code === 'auth/invalid-email') {
          dispatch(setError('That email address is invalid!'));
        }

        dispatch(setError('Wrong email or password'));
      });
  };

  if (type === 'email') {
    firestore()
      .collection('Users')
      .where('email', '==', userinfo)
      .get()
      .then(documentSnapshot => {
        if (!documentSnapshot.size) {
          dispatch(setError('User not found with given credentials'));
        } else {
          documentSnapshot.forEach(doc => {
            checkAuth(doc.data());
          });
        }
      });
  } else if (type === 'phone') {
    firestore()
      .collection('Users')
      .where('phonenumber', '==', userinfo)
      .get()
      .then(documentSnapshot => {
        if (!documentSnapshot.size) {
          dispatch(setError('User not found with given credentials'));
        } else {
          documentSnapshot.forEach(doc => {
            checkAuth(doc.data());
          });
        }
      });
  } else if (type === 'username') {
    firestore()
      .collection('Users')
      .where('username', '==', userinfo)
      .get()
      .then(documentSnapshot => {
        if (!documentSnapshot.size) {
          dispatch(setError('User not found with given credentials'));
        } else {
          documentSnapshot.forEach(doc => {
            checkAuth(doc.data());
          });
        }
      });
  }
};

export const forgotPassword = (dispatch, navigation, type, userinfo) => {
  const sendPasswordReset = user => {
    firebase
      .auth()
      .sendPasswordResetEmail(user.email)
      .then(function () {
        navigation.navigate('Helped', {email: user.email});
      })
      .catch(function (e) {
        console.log(e);
      });
  };

  if (type === 'email') {
    firestore()
      .collection('Users')
      .where('email', '==', userinfo)
      .get()
      .then(documentSnapshot => {
        if (!documentSnapshot.size) {
          dispatch(setError('User not found with given credentials'));
        } else {
          documentSnapshot.forEach(doc => {
            sendPasswordReset(doc.data());
          });
        }
      });
  } else if (type === 'phone') {
    firestore()
      .collection('Users')
      .where('phonenumber', '==', userinfo)
      .get()
      .then(documentSnapshot => {
        if (!documentSnapshot.size) {
          dispatch(setError('User not found with given credentials'));
        } else {
          documentSnapshot.forEach(doc => {
            sendPasswordReset(doc.data());
          });
        }
      });
  } else if (type === 'username') {
    firestore()
      .collection('Users')
      .where('username', '==', userinfo)
      .get()
      .then(documentSnapshot => {
        if (!documentSnapshot.size) {
          dispatch(setError('User not found with given credentials'));
        } else {
          documentSnapshot.forEach(doc => {
            sendPasswordReset(doc.data());
          });
        }
      });
  }
};
