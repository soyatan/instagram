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

const AddPhotoScreen = ({route, navigation}) => {
  const user = useSelector(userSelector);

  const dispatch = useDispatch();

  const addPhone = () => {
    console.log('No phone');
  };

  const completeSignup = () => {
    if (route.params.country) {
      navigation.navigate('Phone-Email', {
        country: route.params.country,
        username: route.params.username,
        password: route.params.password,
      });
    } else {
      navigation.navigate('Phone-Email', {
        country: '',
        username: route.params.username,
        password: route.params.password,
      });
    }
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
        onPress={() => completeSignup()}
        label={'Add a Photo'}
        pressable={true}></AuthButton>
      <TouchableOpacity
        style={styles.smalltextscontainer}
        onPress={() => addPhone()}>
        <Text style={styles.bluetext}> Skip</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddPhotoScreen;
