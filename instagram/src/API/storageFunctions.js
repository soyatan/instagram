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
import {savePost} from './firebase';

export const uploadImage = async (image, user, caption, navigation) => {
  const childPath = `${user.userId}/${Math.random().toString(36)}`;

  const uploadUri =
    Platform.OS === 'ios' ? image.replace('file://', '') : image;

  const task = storage().ref(`userPosts`).child(childPath).putFile(uploadUri);

  const taskProgress = snapshot => {
    //console.log(`transferred: ${snapshot.bytesTransfered}`);
  };

  const taskCompleted = snapshot => {
    snapshot.ref.getDownloadURL().then(snapshot => {
      savePost(snapshot, caption, user.userId, navigation);
    });
  };

  const taskError = snapshot => {
    console.log(snapshot);
  };
  task.on('state_changed', taskProgress, taskError, taskCompleted);
  // set progress state
};
