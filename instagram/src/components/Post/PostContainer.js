import React, {useEffect} from 'react';

import {Text, View, StatusBar} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {Colors} from '../../constants/Colors';

import {WelcomeScreen} from '../Blog/WelcomeScreen';
import {BlogHeader} from '../Blog/BlogHeader';
import {BlogFooter} from '../Blog/BlogFooter';
import CameraScreen from '../Camera/CameraScreen';
import CreatePostScreen from './CreatePostScreen';

const Post = createStackNavigator();

const PostContainer = () => {
  return (
    <>
      <Post.Navigator screenOptions={{headerShown: false}}>
        <Post.Screen name="PostEdit" component={CreatePostScreen} />
      </Post.Navigator>
    </>
  );
};

export default PostContainer;
