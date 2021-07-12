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

const CameraScreen = () => {
  const [imageUri, setimageUri] = useState('');
  const camera = useRef();

  const takePicture = async function () {
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
  console.log(imageUri, 'imageuri');
  console.log(camera);
  return imageUri == '' ? (
    <View style={styles.container}>
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
          return (
            <View
              style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
              <TouchableOpacity
                onPress={() => takePicture()}
                style={styles.capture}>
                <Text style={{fontSize: 14}}> SNAP </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      </RNCamera>
    </View>
  ) : (
    <View style={{flex: 1}}>
      <ImageBackground
        style={styles.imageBackground}
        source={{uri: imageUri}}
      />
      <View style={styles.okButtonContainer}>
        <Button title="TAMAM" onPress={() => setimageUri('')} />
      </View>
    </View>
  );
};
export default CameraScreen;
