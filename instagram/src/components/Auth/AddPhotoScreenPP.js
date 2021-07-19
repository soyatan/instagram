import React, {useState, useEffect} from 'react';
//import LinearGradient from 'react-native-linear-gradient';
import {Text, View, TouchableOpacity, Image, Button} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import styles from './styles';
import AuthInput from './AuthInput';
import AuthButton from './AuthButton';
import {useDispatch, useSelector} from 'react-redux';
import countries from './countries.json';
import auth from '@react-native-firebase/auth';
import {getCountry} from 'react-native-localize';
import {ImageLink} from '../../Assets/Images';
import {setError, userSelector} from '../../redux/userReducer';
import {Icon} from '../../Assets/Svgs/icon';
import ImagePicker from 'react-native-image-crop-picker';
import {imageGalleryLaunch} from '../../API/launchImageGallery';

const AddPhotoScreenPP = ({route, navigation}) => {
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
          screen: 'PPEdit',
          params: {source: image.path},
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.cameracontainer}>
        <Icon name={'Camera'} scale={3} />
      </View>

      <Text style={styles.bigblacktext}>Add Profile Photo</Text>

      <View style={styles.longtextcontainer}>
        <Text style={styles.shadytext}>
          Add a profile photo so your friends know it's you.
        </Text>
      </View>

      <AuthButton
        onPress={() => navigation.navigate('Camera', {type: 'pp'})}
        label={'Add a Photo'}
        pressable={true}></AuthButton>
      <AuthButton
        onPress={() => chooseFromGallery()}
        label={'Choose from Gallery'}
        pressable={true}></AuthButton>
      <TouchableOpacity
        style={styles.smalltextscontainer}
        onPress={() => navigation.navigate('Welcome')}>
        <Text style={styles.bluetext}> Skip</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddPhotoScreenPP;
