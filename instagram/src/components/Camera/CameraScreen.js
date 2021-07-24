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
import {FlashContainer} from './FlashContainer';
import {SwitchCameraContainer} from './SwitchCameraContainer';
import {requestStoragePermission} from './../../API/requestPermission';
import CameraRoll from '@react-native-community/cameraroll';

const CameraScreen = ({route, navigation}) => {
  const flashOptions = [
    RNCamera.Constants.FlashMode.auto,
    RNCamera.Constants.FlashMode.on,
    RNCamera.Constants.FlashMode.off,
  ];
  const [isVideoRecording, setIsVideoRecording] = useState(false);
  const [cameraMode, setcameraMode] = useState(RNCamera.Constants.Type.back);
  const [flashMode, setflashMode] = useState(flashOptions[0]);
  const [isPreview, setIsPreview] = useState(false);
  const [videoSource, setVideoSource] = useState(null);
  const [imageUri, setimageUri] = useState('');
  const [isStory, setisStory] = useState(false);

  const camera = useRef();
  useEffect(() => {
    if (route.params.type === 'story') {
      setisStory(true);
    }
  }, [route]);

  const cycleFlashOptions = () => {
    if (flashMode === flashOptions[0]) {
      setflashMode(flashOptions[1]);
    } else if (flashMode === flashOptions[1]) {
      setflashMode(flashOptions[2]);
    } else if (flashMode === flashOptions[2]) {
      setflashMode(flashOptions[0]);
    }
  };

  const switchCamera = () => {
    if (cameraMode === RNCamera.Constants.Type.back) {
      setcameraMode(RNCamera.Constants.Type.front);
    } else {
      setcameraMode(RNCamera.Constants.Type.back);
    }
  };

  useEffect(() => {
    if (imageUri) {
      if (route.params.type === 'post') {
        editImagePost();
      } else if (route.params.type === 'pp') {
        editImagePP();
      } else if (route.params.type === 'story') {
        editImageStory();
      }
    }
  }, [imageUri]);

  useEffect(() => {
    if (videoSource) {
      if (route.params.type === 'post') {
        navigation.navigate('Post', {
          screen: 'PostEdit',
          params: {source: videoSource, type: 'video'},
        });
      } else if (route.params.type === 'story') {
        navigation.navigate('Post', {
          screen: 'StoryEdit',
          params: {source: videoSource, type: 'video'},
        });
      }
    }
  }, [videoSource]);

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
  const editImageStory = async () => {
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
          screen: 'StoryEdit',
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
  const _handlePress = () => {
    if (isVideoRecording) {
      stopVideoRecording();
    } else {
      takePicture();
    }
  };

  const _handleLongPress = () => {
    if (!isVideoRecording && route.params.type === 'post') {
      recordVideo();
    } else if (!isVideoRecording && route.params.type === 'story') {
      recordVideo();
    }
  };
  const recordVideo = async () => {
    if (camera) {
      console.log('we are recording');
      try {
        const videoRecordPromise = camera.current.recordAsync({
          targetBitRate: 1000 * 1000 * 2,
        });
        if (videoRecordPromise) {
          setIsVideoRecording(true);
          const data = await videoRecordPromise;
          const source = data.uri;
          if (source) {
            setIsPreview(true);
            console.log('video source', source);
            setVideoSource(source);
            setIsVideoRecording(false);
          }
        }
      } catch (error) {
        console.warn(error);
        setIsVideoRecording(false);
      }
    }
  };

  const stopVideoRecording = () => {
    if (camera) {
      setIsPreview(false);

      camera.current.stopRecording();
    }
  };
  return (
    <View style={styles.cameracontainer}>
      <RNCamera
        ref={camera}
        style={styles.preview}
        type={cameraMode}
        flashMode={flashMode}
        captureAudio={false}
        defaultVideoQuality={RNCamera.Constants.VideoQuality['480p']}
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
            <CaptureButton
              onPress={() => _handlePress()}
              onLongPress={() => _handleLongPress()}
              isVideoRecording={isVideoRecording}
            />
          );
        }}
      </RNCamera>
      <FlashContainer
        onPress={() => cycleFlashOptions()}
        flashMode={flashMode}
      />
      <SwitchCameraContainer onPress={() => switchCamera()} />
      <CameraGrid />
    </View>
  );
};
export default CameraScreen;
