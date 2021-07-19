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
import {RNCamera} from 'react-native-camera';
import {dirPicutures} from '../../API/fsFunctions';

import CameraRoll from '@react-native-community/cameraroll';
import {requestStoragePermission} from '../../API/requestPermission';
import {CaptureButton} from '../Camera/CaptureButton';
import {ConfirmButton} from '../Camera/ConfirmButton';

import {CameraGrid} from '../Camera/CameraGrid';
import ImagePicker from 'react-native-image-crop-picker';

import {useSelector} from 'react-redux';
import {userSelector} from '../../redux/userReducer';
import styles from './styles';

import {ProfilePhotoSmall} from '../Blog/ProfilePhotoSmall';
import {PhotoPreview} from '../Camera/PhotoPreview';
import {uploadImage} from '../../API/storageFunctions';
import {PreviewScreen} from './../Camera/PreviewScreen';
import SelectMultipleButton from './SelectMultipleButton';
import {TouchableIcon} from './../../Assets/Svgs/touchableIcon';
import AuthButton from './../Auth/AuthButton';

const NewPostScreen = ({route, navigation}) => {
  const user = useSelector(userSelector);
  const [location, setlocation] = useState('');
  const [image, setimage] = useState(null);
  const [caption, setcaption] = useState('');
  const chooseFromGallery = () => {
    ImagePicker.openPicker({
      width: 250,
      height: 250,
      cropping: true,
      freeStyleCropEnabled: true,
      mediaType: 'photo',
      useFrontCamera: true,
    })
      .then(image => {
        navigation.navigate('Post', {
          screen: 'PostEdit',
          params: {source: image.path},
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  const saveToRollandSendPost = async () => {
    if (image) {
      try {
        requestStoragePermission(() => CameraRoll.save(image, 'photo'));
        uploadImage(image, user, caption, location, navigation);
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
          onPress={() => navigation.navigate('Welcome')}
          name={'Close'}
          scale={0.9}
        />
        <Text style={styles.bigblacktext}>New Post</Text>
      </View>

      <View style={styles.galleryrow}>
        <AuthButton
          onPress={() => chooseFromGallery()}
          label={'Choose from Gallery'}
          pressable={true}></AuthButton>
        <AuthButton
          onPress={() => navigation.navigate('Camera', {type: 'post'})}
          label={'Add a Photo'}
          pressable={true}></AuthButton>
      </View>
    </View>
  );
};
export default NewPostScreen;
