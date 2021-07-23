import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  TouchableOpacity,
  ImageBackground,
  Button,
  Text,
  PermissionsAndroid,
  TextInput,
} from 'react-native';

import CameraRoll from '@react-native-community/cameraroll';
import {requestStoragePermission} from '../../API/requestPermission';

import {useSelector} from 'react-redux';
import {userSelector} from '../../redux/userReducer';
import styles from './styles';
import {TouchableIcon} from './../../Assets/Svgs/touchableIcon';
import {ProfilePhotoSmall} from './../Blog/ProfilePhotoSmall';
import {PhotoPreview} from '../Camera/PhotoPreview';
import {uploadImage, uploadVideo} from './../../API/storageFunctions';

const CreatePostScreen = ({route, navigation}) => {
  const user = useSelector(userSelector);
  const [location, setlocation] = useState('');
  const [image, setimage] = useState(null);
  const [caption, setcaption] = useState('');

  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    setimage(route.params.source);
  }, [route]);

  const saveToRollandSendPost = async () => {
    if (image) {
      try {
        requestStoragePermission(() => CameraRoll.save(image, 'photo'));
        if (route.params.type === 'video') {
          uploadVideo(image, user, caption, location, navigation, setisLoading);
        } else {
          uploadImage(image, user, caption, location, navigation, setisLoading);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log('no image selected');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headercontainer}>
        <TouchableIcon
          onPress={() => navigation.goBack()}
          name={'Left'}
          scale={1.4}
        />
        <Text style={styles.bigblacktext}>New Post</Text>
        <TouchableIcon
          name={'Checked'}
          scale={1.4}
          onPress={() => saveToRollandSendPost()}
        />
      </View>
      <View style={styles.firstrow}>
        <ProfilePhotoSmall source={user.pplink} />
        <TextInput
          style={styles.textinput}
          label={'Write a caption...'}
          placeholder={'Write a caption...'}
          autoCorrect={false}
          autoCapitalize="none"
          placeholderTextColor="black"
          selectionColor="blue"
          onChangeText={setcaption}
          value={caption}
          keyboardType={'default'}
        />
        <PhotoPreview source={route.params.source} />
      </View>

      <View style={styles.secondrow}>
        {!isLoading ? (
          <TextInput
            style={styles.textinput}
            label={'Add Location...'}
            placeholder={'Add Location...'}
            autoCorrect={false}
            autoCapitalize="none"
            placeholderTextColor="black"
            selectionColor="blue"
            onChangeText={setlocation}
            value={location}
            keyboardType={'default'}
          />
        ) : (
          <Text>Uploading...</Text>
        )}
      </View>
    </View>
  );
};
export default CreatePostScreen;
