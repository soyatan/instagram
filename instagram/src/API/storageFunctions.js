import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Alert,
  Image,
} from 'react-native';

import storage from '@react-native-firebase/storage';

export const uploadImagezz = async image => {
  const filename = image.substring(image.lastIndexOf('/') + 1);
  const uploadUri =
    Platform.OS === 'ios' ? image.replace('file://', '') : image;

  const task = storage().ref(filename).putFile(uploadUri);
  // set progress state

  try {
    await task;
  } catch (e) {
    console.error(e);
  }
  Alert.alert(
    'Photo uploaded!',
    'Your photo has been uploaded to Firebase Cloud Storage!',
  );
  //setImage(null);
};

export const uploadImage = async image => {
  const filename = image.substring(image.lastIndexOf('/') + 1);
  console.log('imajh', image);
  /*
  const childPath = `posts/${
    firebase.auth().currentUser.uid
  }/${Math.random().toString(40)}`;*/

  const uploadUri =
    Platform.OS === 'ios' ? image.replace('file://', '') : image;

  const task = storage().ref().child('cocukidsi').putFile(uploadUri);

  const taskProgress = snapshot => {
    console.log(`transferred: ${snapshot.bytesTransfered}`);
  };

  const taskCompleted = snapshot => {
    snapshot.ref.getDownloadURL().then(snapshot => {
      console.log(snapshot);
    });
  };

  const taskError = snapshot => {
    console.log(snapshot);
  };
  task.on('state_changed', taskProgress, taskError, taskCompleted);
  // set progress state
};
