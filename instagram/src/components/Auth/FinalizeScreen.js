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

const FinalizeScreen = ({route, navigation}) => {
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
      <Text style={styles.bigblacktext}>
        Welcome to Instagram, {route.params.username}
      </Text>
      <View style={styles.longtextcontainer}>
        <Text style={styles.shadytext}>
          We'll add the {route.params.email} and a phone number to your account.
          This step is optional.
        </Text>
      </View>

      <AuthButton
        onPress={() => completeSignup()}
        label={'Complete Sign Up'}
        pressable={true}></AuthButton>
      <TouchableOpacity
        style={styles.smalltextscontainer}
        onPress={() => addPhone()}>
        <Text style={styles.bluetext}> Add New Phone Number</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.footer}>
        <Text style={styles.shadytext}>
          We'll add private info to {route.params.username}. See
        </Text>
        <Text style={styles.blacktext}>
          Terms, Data Policy and Cookies Policy
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default FinalizeScreen;
