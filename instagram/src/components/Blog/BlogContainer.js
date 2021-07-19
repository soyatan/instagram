import React, {useEffect} from 'react';

import {Text, View, StatusBar} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {Colors} from './../../constants/Colors';

import styles from './styles';

import {WelcomeScreen} from '../Blog/WelcomeScreen';
import {BlogHeader} from '../Blog/BlogHeader';
import {BlogFooter} from './../Blog/BlogFooter';
import CameraScreen from '../Camera/CameraScreen';

import PostContainer from '../Post/PostContainer';

import AddPhotoScreenPP from '../Auth/AddPhotoScreenPP';
import BottomModal from './BottomModal';

const Blog = createStackNavigator();

const BlogContainer = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.lightGray} />
      <BlogHeader />
      <Blog.Navigator screenOptions={{headerShown: false}}>
        <Blog.Screen name="Welcome" component={WelcomeScreen} />
        <Blog.Screen name="Camera" component={CameraScreen} />
        <Blog.Screen name="Photo" component={AddPhotoScreenPP} />
      </Blog.Navigator>
      <BlogFooter />
    </>
  );
};

export default BlogContainer;
