import React from 'react';
import {View, ScrollView, Text, Image} from 'react-native';
import styles from './styles';

import {ProfilePhotoSmall} from './ProfilePhotoSmall';
import {TouchableIcon} from './../../Assets/Svgs/touchableIcon';
import {ImageLink} from './../../Assets/Images/index';
export const PostCard = () => {
  return (
    <ScrollView style={styles.postcardcontainer}>
      <View style={styles.postcardtopcontainer}>
        <ProfilePhotoSmall />
        <View style={styles.doubletextstack}></View>
        <View style={styles.optionsbuttoncontainer}>
          <TouchableIcon name={'Three_Dots'} scale={1} />
        </View>
      </View>

      <View style={styles.postimagecontainer}>
        <Image style={styles.image} source={ImageLink['imaj']} />
      </View>
      <View style={styles.postcardbottomcontainer}></View>
      <View style={styles.commentscontainer}></View>
    </ScrollView>
  );
};
