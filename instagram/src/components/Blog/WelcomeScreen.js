import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {StoryContainer} from '../Story/StoryContainer';
import {BlogHeader} from './BlogHeader';
import {PostCard} from './PostCard';
import styles from './styles';
import {UserCard} from './UserCard';

export const WelcomeScreen = () => {
  const [isNew, setisNew] = useState(false);
  return (
    <View style={styles.container}>
      <StoryContainer />
      {isNew ? (
        <>
          <Text style={styles.bigblacktext}>Welcome to Instagram</Text>
          <View style={styles.longtextcontainer}>
            <Text style={styles.shadytext}>
              Follow people to start seeing the photos and videos they share.
            </Text>
          </View>
          <UserCard />
        </>
      ) : (
        <PostCard />
      )}
    </View>
  );
};
