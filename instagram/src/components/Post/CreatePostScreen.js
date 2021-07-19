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
import {PreviewScreen} from '../Camera/PreviewScreen';
import {CameraGrid} from '../Camera/CameraGrid';
import ImagePicker from 'react-native-image-crop-picker';

import {useSelector} from 'react-redux';
import {userSelector} from '../../redux/userReducer';
import styles from './styles';
import {TouchableIcon} from './../../Assets/Svgs/touchableIcon';
import {ProfilePhotoSmall} from './../Blog/ProfilePhotoSmall';
import {PhotoPreview} from '../Camera/PhotoPreview';
import {uploadImage} from './../../API/storageFunctions';

const CreatePostScreen = ({route, navigation}) => {
  const user = useSelector(userSelector);
  const [image, setimage] = useState(null);
  const [caption, setcaption] = useState('');
  useEffect(() => {
    setimage(route.params.source);
  }, [route]);

  const saveToRollandSendPost = async () => {
    if (image) {
      try {
        requestStoragePermission(() => CameraRoll.save(image, 'photo'));
        uploadImage(image, user, caption, navigation);
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
        <ProfilePhotoSmall />
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
        <Text style={styles.mediumblacktext}>Tag People</Text>
      </View>
      <View style={styles.secondrow}>
        <Text style={styles.mediumblacktext}>Add Location</Text>
      </View>
    </View>
  );
};
export default CreatePostScreen;
