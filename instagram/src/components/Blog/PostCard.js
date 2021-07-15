import React from 'react';
import {View, ScrollView, Text, Image} from 'react-native';
import styles from './styles';

import {ProfilePhotoSmall} from './ProfilePhotoSmall';
import {TouchableIcon} from './../../Assets/Svgs/touchableIcon';
import {ImageLink} from './../../Assets/Images/index';
import {Icon} from './../../Assets/Svgs/icon';

export const PostCard = () => {
  const dummy =
    'Necati_soyaNecati_soyataNecati_soyataNecati_soyataNecati_soyataNecati_soyataNecati_soyataNecati_soyataNecati_soyataNecati_soyataNecati_soyatata';
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
      <View style={styles.postcardbottomcontainer}>
        <Icon name={'Like'} scale={1} />
        <Icon name={'Comment'} scale={1} />
        <Icon name={'Message'} scale={1} />
        <Icon name={'Favorite'} scale={1} />
      </View>
      <View style={styles.likecontainer}>
        <Text>1000 Likes</Text>
      </View>
      <View style={styles.commentscontainer}>
        <Text style={styles.blacktext} numberOfLines={2}>
          Necati_soyata
          <Text style={styles.commenttext}>{dummy.substring(0, 55)}</Text>
          <Text onPress={() => console.log('YOP')} style={styles.shadytext}>
            ...more
          </Text>
        </Text>
      </View>
      <Text onPress={() => console.log('YOP')} style={styles.shadytexttoleft}>
        View all 123 comments
      </Text>
      <Text style={styles.datetext}>16 hours ago</Text>
    </ScrollView>
  );
};
