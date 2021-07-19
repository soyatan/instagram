import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  TouchableOpacity,
  ImageBackground,
  Button,
  Text,
  PermissionsAndroid,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import styles from './styles';
import {CaptureButton} from './CaptureButton';
import {ConfirmButton} from './ConfirmButton';
import {PreviewScreen} from './PreviewScreen';
import {CameraGrid} from './CameraGrid';
import ImagePicker from 'react-native-image-crop-picker';
import {useSelector} from 'react-redux';
import {userSelector} from '../../redux/userReducer';

const CameraScreen = ({route, navigation}) => {
  const user = useSelector(userSelector);

  const [imageUri, setimageUri] = useState('');
  const [isTaking, setisTaking] = useState(true);
  const camera = useRef();

  useEffect(() => {
    if (imageUri) {
      if (route.params.type === 'post') {
        editImagePost();
      } else if (route.params.type === 'pp') {
        editImagePP();
      }
      //navigation.navigate('Post', {uri: imageUri});
    }
  }, [imageUri]);

  const editImagePost = async () => {
    await ImagePicker.openCropper({
      path: imageUri,
      width: 250,
      height: 250,
      cropping: true,
      freeStyleCropEnabled: false,
    })
      .then(image => {
        //requestStoragePermission(() => CameraRoll.save(image.path, 'photo'));
        //uploadImage(image.path, user);
        navigation.navigate('Post', {
          screen: 'PostEdit',
          params: {source: image.path},
        });
      })

      .catch(error => {
        console.log(error);
      });
  };

  const editImagePP = async () => {
    await ImagePicker.openCropper({
      path: imageUri,
      width: 250,
      height: 250,
      cropping: true,
      freeStyleCropEnabled: false,
    })
      .then(image => {
        //requestStoragePermission(() => CameraRoll.save(image.path, 'photo'));
        //uploadImage(image.path, user);
        navigation.navigate('Post', {
          screen: 'PPEdit',
          params: {source: image.path},
        });
      })

      .catch(error => {
        console.log(error);
      });
  };

  const takePicture = async function () {
    console.log('CHEESE');
    if (camera) {
      const options = {quality: 0.5, base64: false};
      const data = await camera.current
        ?.takePictureAsync(options)
        .then(data => {
          console.log(data.uri);
          setimageUri(data == undefined ? '' : data.uri);
        })

        .catch(error => {
          console.log(error);
        });
    }
  };

  return (
    <View style={styles.cameracontainer}>
      <RNCamera
        ref={camera}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        captureAudio={false}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}>
        {({camera, status, recordAudioPermissionStatus}) => {
          if (status !== 'READY') return <Text>Waiting</Text>;
          return <CaptureButton onPress={() => takePicture()} />;
        }}
      </RNCamera>
      <CameraGrid />
    </View>
  );
};
export default CameraScreen;
