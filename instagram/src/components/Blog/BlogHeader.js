import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {TouchableIcon} from './../../Assets/Svgs/touchableIcon';
import {useNavigation} from '@react-navigation/native';
export const BlogHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.blogheader}>
      <Text style={styles.logotext}>Instagram</Text>
      <View style={styles.headerlogocontainer}>
        <TouchableIcon
          name={'Plus'}
          scale={1.1}
          onPress={() =>
            navigation.navigate('Post', {
              screen: 'NewPost',
            })
          }
        />
        <TouchableIcon name={'Like'} scale={1.1} />
        <TouchableIcon name={'Message'} scale={1.2} />
      </View>
    </View>
  );
};
