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
import {useDispatch, useSelector} from 'react-redux';
import {userSelector} from '../redux/userReducer';
import {savePost, savePP} from './firebase';
import {stat} from 'react-native-fs';
export const uploadImage = async (
  image,
  user,
  caption,
  location,
  navigation,
  setisLoading,
) => {
  const childPath = `${user.userId}/${Math.random().toString(36)}`;

  const uploadUri =
    Platform.OS === 'ios' ? image.replace('file://', '') : image;

  const task = storage().ref(`userPosts`).child(childPath).putFile(uploadUri);
  setisLoading(true);
  const taskProgress = snapshot => {
    //console.log(`transferred: ${snapshot.bytesTransfered}`);
  };

  const taskCompleted = snapshot => {
    console.log('taskcompleted');
    snapshot.ref.getDownloadURL().then(snapshot => {
      savePost(snapshot, caption, user.userId, location, navigation, 'photo');
      setisLoading(false);
    });
  };

  const taskError = snapshot => {
    setisLoading(false);
  };
  task.on('state_changed', taskProgress, taskError, taskCompleted);
  // set progress state
};

export const uploadVideo = async (
  video,
  user,
  caption,
  location,
  navigation,
  setisLoading,
) => {
  const childPath = `${user.userId}/${Math.random().toString(36)}`;

  const uploadUri =
    Platform.OS === 'ios' ? video.replace('file://', '') : video;

  const task = storage().ref(`userPosts`).child(childPath).putFile(uploadUri);
  setisLoading(true);
  const taskProgress = snapshot => {
    //console.log(`transferred: ${snapshot.bytesTransfered}`);
  };

  const taskCompleted = snapshot => {
    snapshot.ref.getDownloadURL().then(snapshot => {
      savePost(snapshot, caption, user.userId, location, navigation, 'video');
      setisLoading(false);
    });
  };

  const taskError = snapshot => {
    setisLoading(false);
  };
  task.on('state_changed', taskProgress, taskError, taskCompleted);
  // set progress state
};

export const uploadPP = async (image, user, navigation, dispatch) => {
  const childPath = user.userId;

  const uploadUri =
    Platform.OS === 'ios' ? image.replace('file://', '') : image;

  const task = storage()
    .ref(`profilePhotos`)
    .child(childPath)
    .putFile(uploadUri);

  const taskProgress = snapshot => {
    //console.log(`transferred: ${snapshot.bytesTransfered}`);
  };

  const taskCompleted = snapshot => {
    snapshot.ref.getDownloadURL().then(snapshot => {
      savePP(snapshot, user.userId, navigation, dispatch);
    });
  };

  const taskError = snapshot => {};
  task.on('state_changed', taskProgress, taskError, taskCompleted);
  // set progress state
};
