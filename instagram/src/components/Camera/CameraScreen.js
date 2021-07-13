import React, {useState, useRef} from 'react';
import {
  View,
  TouchableOpacity,
  ImageBackground,
  Button,
  Text,
  PermissionsAndroid,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {dirPicutures} from '../../API/fsFunctions';
import styles from './styles';
import CameraRoll from '@react-native-community/cameraroll';
import {requestStoragePermission} from '../../API/requestPermission';
import {CaptureButton} from './CaptureButton';
import {ConfirmButton} from './ConfirmButton';
import {PreviewScreen} from './PreviewScreen';

const CameraScreen = () => {
  const [imageUri, setimageUri] = useState('');
  const camera = useRef();

  const takePicture = async function () {
    console.log('CHEESE');
    if (camera) {
      const options = {quality: 0.5, base64: false};
      const data = await camera.current
        ?.takePictureAsync(options)
        .then(data => {
          console.log(data.uri);
          setimageUri(data == undefined ? '' : data.uri);
          requestStoragePermission(() => CameraRoll.save(data.uri, 'photo'));
        });
    }
  };

  return imageUri == '' ? (
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
    </View>
  ) : (
    <View style={styles.cameracontainer}>
      <PreviewScreen source={{uri: imageUri}} />
      <ConfirmButton onPress={() => setimageUri('')} />
    </View>
  );
};
export default CameraScreen;
