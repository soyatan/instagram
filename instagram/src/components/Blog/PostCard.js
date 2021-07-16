import React, {useState} from 'react';
import {View, ScrollView, Text, Image} from 'react-native';
import styles from './styles';

import {ProfilePhotoSmall} from './ProfilePhotoSmall';
import {TouchableIcon} from './../../Assets/Svgs/touchableIcon';
import {ImageLink} from './../../Assets/Images/index';
import {Icon} from './../../Assets/Svgs/icon';

export const PostCard = () => {
  const [fullDescriptionShown, setfullDescriptionShown] = useState(false);
  const posts = [
    {
      key: 1,
      mediaID: 12312312,
      senderUserName: 'Necati_Soyata',
      description:
        'Those days were amazing to have and some unbelieveably small stuff going around there, however it should be still the one of the best occupations',
      postDate: 1626363512070,
      likers: [123123, 123123, 123123],
      favoriters: [1231234, 123123123, 2131231],
      comments: [123123, 12312312, 3123123, 12312],
    },
  ];

  const dummy =
    'Necati_soyaNecati_soyataNecati_soyataNecati_soyataNecati_soyataNecati_soyataNecati_soyataNecati_soyataNecati_soyataNecati_soyataNecati_soyatata';
  return (
    <ScrollView style={styles.postcardcontainer}>
      <View style={styles.postcardtopcontainer}>
        <ProfilePhotoSmall />
        <View style={styles.doubletextstack}>
          <Text style={styles.blacktext}>n_soyata</Text>
          <Text>Ayasofya Müzesi - İstanbul </Text>
        </View>
        <View style={styles.optionsbuttoncontainer}>
          <TouchableIcon name={'Three_Dots'} scale={1} />
        </View>
      </View>
      <View style={styles.postimagecontainer}>
        <Image style={styles.image} source={ImageLink['imaj']} />
      </View>
      <View style={styles.postcardbottomcontainer}>
        <View
          style={{
            flex: 1.4,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Icon name={'Like'} scale={1.3} />
          <Icon name={'Comment'} scale={1.3} />
          <Icon name={'Message'} scale={1.3} />
        </View>
        <View
          style={{flex: 2, flexDirection: 'row', alignItems: 'center'}}></View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',

            alignItems: 'flex-end',
          }}>
          <Icon name={'Favorite'} scale={1.3} />
        </View>
      </View>
      <View style={styles.likecontainer}>
        <Text>1000 Likes</Text>
      </View>
      <View style={styles.descriptioncontainer}>
        {!fullDescriptionShown ? (
          <Text style={styles.blacktext} numberOfLines={2}>
            {'Necati_soyata '}
            <Text style={styles.commenttext}>{dummy.substring(0, 55)}</Text>
            <Text
              onPress={() => setfullDescriptionShown(true)}
              style={styles.shadytext}>
              ...more
            </Text>
          </Text>
        ) : (
          <Text style={styles.blacktext}>
            {'Necati_soyata '}
            <Text style={styles.commenttext}>{dummy}</Text>
          </Text>
        )}
      </View>
      <Text
        onPress={() => setfullDescriptionShown(true)}
        style={styles.shadytexttoleft}>
        View all 123 comments
      </Text>
      <Text style={styles.datetext}>16 hours ago</Text>
    </ScrollView>
  );
};
