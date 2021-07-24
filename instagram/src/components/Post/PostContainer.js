import React, {useEffect} from 'react';

import {Text, View, StatusBar} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';

import CreatePostScreen from './CreatePostScreen';
import NewPostScreen from './NewPostScreen';
import CreatePPScreen from './CreatePPScreen';
import CreateStoryScreen from './CreateStoryScreen';

const Post = createStackNavigator();

const PostContainer = () => {
  return (
    <>
      <Post.Navigator screenOptions={{headerShown: false}}>
        <Post.Screen name="PostEdit" component={CreatePostScreen} />
        <Post.Screen name="StoryEdit" component={CreateStoryScreen} />
        <Post.Screen name="NewPost" component={NewPostScreen} />

        <Post.Screen name="PPEdit" component={CreatePPScreen} />
      </Post.Navigator>
    </>
  );
};

export default PostContainer;
