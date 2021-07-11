import React, {useState, useEffect} from 'react';
//import LinearGradient from 'react-native-linear-gradient';
import {Text, View, TouchableOpacity, Image, Button} from 'react-native';
import styles from './styles';
import AuthInput from './AuthInput';
import AuthButton from './AuthButton';
import {useDispatch, useSelector} from 'react-redux';
import countries from './countries.json';
import auth from '@react-native-firebase/auth';
import {getCountry} from 'react-native-localize';
import {ImageLink} from '../../Assets/Images';
import {setError, userSelector} from '../../redux/userReducer';

const SignInScreen = () => {
  const user = useSelector(userSelector);
  const [country, setcountry] = useState('');
  const [initializing, setInitializing] = useState(true);

  const [isvalidEmail, setIsValidEmail] = useState(true);
  const [isvalidPW, setIsValidPW] = useState(true);
  const [isvalidName, setIsValidName] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [isSignIn, setisSignIn] = useState('none');
  const [name, setname] = useState('');

  const dispatch = useDispatch();

  function onAuthStateChanged(user) {
    if (initializing) setInitializing(false);
  }

  const signUpWithEmail = () => {
    if (
      !isvalidEmail ||
      !isvalidPW ||
      !isvalidName ||
      !email ||
      !password ||
      !name
    ) {
      dispatch(setError('Please enter valid email and password'));
    } else if (password === confirmPassword) {
      createUser(dispatch, name, email, password);
    } else {
      dispatch(setError("Passwords don't match"));
    }
  };
  useEffect(() => {
    try {
      const userCountry = countries[getCountry()];
      setcountry(userCountry);
    } catch (error) {
      console.error(error);
    }
  }, []);
  const loginWithEmail = () => {
    if (!isvalidEmail || !isvalidPW || !email || !password) {
      dispatch(setError('Please enter valid email and password'));
    } else {
      signInUser(dispatch, email, password);
    }
  };

  const forgotPasswordRequest = () => {
    if (email && isvalidEmail) {
      forgotPassword(email);
    } else {
      dispatch(setError('Please enter valid email address'));
    }
  };
  const switchToSignUp = () => {
    setisSignIn('sign up');
  };
  const switchToSignIn = () => {
    setisSignIn('sign in');
  };
  /*
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);*/

  const validateEmail = () => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(email).toLowerCase())) {
      setIsValidEmail(true);
      dispatch(setError(null));
    } else {
      setIsValidEmail(false);
      dispatch(setError('Please enter valid e-mail address'));
    }
  };

  const validatePW = () => {
    if (password.length >= 4) {
      setIsValidPW(true);
    } else {
      setIsValidPW(false);
      dispatch(setError('Please enter valid password'));
    }
  };
  const validateName = () => {
    if (name.length >= 4) {
      setIsValidName(true);
    } else {
      setIsValidName(false);
      dispatch(setError('Please enter valid Name'));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titletext}>English({country})</Text>
      </View>
      <View style={styles.logocontainer}>
        <Text style={styles.logotext}>Instagram</Text>
      </View>

      <AuthInput
        label={'Phone number, email or username'}
        keyboardType={'email-address'}
        state={email}
        onChangeText={setEmail}
        onEndEditing={validateEmail}
      />
      <AuthInput
        label={'Password'}
        iconname={'Hide'}
        state={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        onEndEditing={validatePW}
        keyboardType={'default'}
      />

      <View style={styles.errormessagecontainer}>
        {user.errorMessage ? (
          <Text style={{fontSize: 16, color: 'red'}}>{user.errorMessage}</Text>
        ) : null}
      </View>
      {(isSignIn === 'none') | (isSignIn === 'sign in') ? (
        <>
          <AuthButton label={'Login With Email'}></AuthButton>

          <TouchableOpacity
            onPress={() => {
              switchToSignUp();
              dispatch(setError(null));
            }}
            style={styles.smalltextscontainer}>
            <Text style={{fontSize: 14, color: 'black', fontWeight: 'bold'}}>
              Don't have an account? Sign Up
            </Text>
          </TouchableOpacity>
        </>
      ) : null}
      {isSignIn === 'sign up' ? (
        <>
          <AuthButton label={'Sign Up With Email'}></AuthButton>
          <TouchableOpacity
            onPress={() => {
              switchToSignIn();
              dispatch(setError(null));
            }}
            style={styles.smalltextscontainer}>
            <Text style={{fontSize: 14, color: 'black', fontWeight: 'bold'}}>
              Already have an account? Sign In
            </Text>
          </TouchableOpacity>
        </>
      ) : null}
      <TouchableOpacity style={styles.smalltextscontainer}>
        <Text style={{fontSize: 14, color: 'black', fontWeight: 'bold'}}>
          Forgot Password?
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignInScreen;
