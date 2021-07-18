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
import {createUser} from '../../API/firebase';

const FinalizeScreen = ({route, navigation}) => {
  const dispatch = useDispatch();
  const [phone, setphone] = useState('');
  const [isPhoneSet, setisPhoneSet] = useState(false);
  const [isValidPhone, setisValidPhone] = useState(false);
  const [isPhoneAdding, setisPhoneAdding] = useState(false);
  const user = useSelector(userSelector);
  const registerUser = (country, username, email, password, phonenumber) => {
    createUser(dispatch, country, username, email, password, phonenumber);
  };

  const addPhoneNumber = () => {
    if (isValidPhone) {
      setisPhoneAdding(false);
      setisPhoneSet(true);
    }
  };
  const switchAdding = () => {
    if (isPhoneAdding) {
      setisPhoneAdding(false);
    } else {
      setisPhoneAdding(true);
    }
  };
  const validatePhone = () => {
    var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    if (re.test(phone)) {
      setisValidPhone(true);
      dispatch(setError(null));
    } else {
      setisValidPhone(false);
      dispatch(setError('Please enter valid phone number'));
    }
  };

  const completeSignup = () => {
    if (route.params.country) {
      if (phone) {
        registerUser(
          route.params.country,
          route.params.username,
          route.params.email,
          route.params.password,
          phone,
        );
      } else {
        registerUser(
          route.params.country,
          route.params.username,
          route.params.email,
          route.params.password,
          null,
        );
      }
    } else {
      if (phone) {
        registerUser(
          null,
          route.params.username,
          route.params.email,
          route.params.password,
          phone,
        );
      } else {
        registerUser(
          null,
          route.params.username,
          route.params.email,
          route.params.password,
          null,
        );
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.bigblacktext}>
        Welcome to Instagram, {route.params.username}
      </Text>
      <View style={styles.longtextcontainer}>
        {!isPhoneSet ? (
          <Text style={styles.shadytext}>
            We'll add the {route.params.email} and a phone number to your
            account. This step is optional.
          </Text>
        ) : (
          <Text style={styles.shadytext}>
            We'll add the {route.params.email} and {phone} as phone number to
            your account.
          </Text>
        )}
      </View>
      {!isPhoneAdding ? (
        <>
          <AuthButton
            onPress={() => completeSignup()}
            label={'Complete Sign Up'}
            pressable={true}></AuthButton>
          {!isPhoneSet ? (
            <TouchableOpacity
              style={styles.smalltextscontainer}
              onPress={() => switchAdding()}>
              <Text style={styles.bluetext}> Add New Phone Number</Text>
            </TouchableOpacity>
          ) : null}
        </>
      ) : (
        <>
          <AuthInput
            label={'Phone Number'}
            keyboardType={'numeric'}
            state={phone}
            onChangeText={setphone}
            onEndEditing={validatePhone}
          />
          {user.errorMessage ? (
            <View style={styles.errormessagecontainer}>
              <Text style={{fontSize: 16, color: 'red'}}>
                {user.errorMessage}
              </Text>
            </View>
          ) : null}
          <AuthButton
            onPress={() => addPhoneNumber()}
            label={'Add Phone Number'}
            pressable={isValidPhone}></AuthButton>
          <TouchableOpacity
            style={styles.smalltextscontainer}
            onPress={() => switchAdding()}>
            <Text style={styles.bluetext}>
              Continue without adding phone number
            </Text>
          </TouchableOpacity>
        </>
      )}

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
