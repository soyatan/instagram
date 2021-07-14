import React, {useEffect} from 'react';

import {Text, View, StatusBar} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {Colors} from './../../constants/Colors';

import styles from './styles';

import {WelcomeScreen} from '../Blog/WelcomeScreen';
import {BlogHeader} from '../Blog/BlogHeader';
import {BlogFooter} from './../Blog/BlogFooter';

const Blog = createStackNavigator();

const BlogContainer = () => {
  return (
    <>
      <BlogHeader />
      <Blog.Navigator screenOptions={{headerShown: false}}>
        <Blog.Screen name="Welcome" component={WelcomeScreen} />
      </Blog.Navigator>
      <BlogFooter />
    </>
  );
};

export default BlogContainer;
