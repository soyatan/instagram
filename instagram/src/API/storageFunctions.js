import React, {useState} from 'react';
import auth, {firebase} from '@react-native-firebase/auth';
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
import {useSelector} from 'react-redux';
import {userSelector} from '../redux/userReducer';

export const uploadImage = async (image, user) => {
  const filename = image.substring(image.lastIndexOf('/') + 1);
  console.log('imajh', image);

  const childPath = `${user.userId}/${Math.random().toString(36)}`;

  const uploadUri =
    Platform.OS === 'ios' ? image.replace('file://', '') : image;

  const task = storage().ref(`userPosts`).child(childPath).putFile(uploadUri);

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
