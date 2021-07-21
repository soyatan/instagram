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

import {useDispatch, useSelector} from 'react-redux';
import {userSelector} from '../../redux/userReducer';
import styles from './styles';
import {TouchableIcon} from '../../Assets/Svgs/touchableIcon';
import {ProfilePhotoSmall} from '../Blog/ProfilePhotoSmall';
import {PhotoPreview} from '../Camera/PhotoPreview';
import {uploadImage, uploadPP} from '../../API/storageFunctions';
import {PreviewScreen} from './../Camera/PreviewScreen';

const CreatePPScreen = ({route, navigation}) => {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const [location, setlocation] = useState('');
  const [image, setimage] = useState(null);
  const [caption, setcaption] = useState('');
  useEffect(() => {
    setimage(route.params.source);
  }, [route]);

  const saveToRollandSendPP = async () => {
    if (image) {
      try {
        requestStoragePermission(() => CameraRoll.save(image, 'photo'));
        uploadPP(image, user, navigation, dispatch);
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
        <Text style={styles.bigblacktext}>New Profile Picture</Text>
        <TouchableIcon
          name={'Checked'}
          scale={1.4}
          onPress={() => saveToRollandSendPP()}
        />
      </View>
      <View style={styles.pppreviewcontainer}>
        <PreviewScreen source={{uri: route.params.source}} />
      </View>
    </View>
  );
};
export default CreatePPScreen;
