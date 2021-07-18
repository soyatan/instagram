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
import {Icon} from '../../Assets/Svgs/icon';
import {signInUser} from '../../API/firebase';
import {loginWithFacebook} from '../../API/facebook';

const SignInScreen = ({route, navigation}) => {
  const user = useSelector(userSelector);
  const [country, setcountry] = useState('');
  const [initializing, setInitializing] = useState(true);
  const [showPassword, setshowPassword] = useState(false);
  const [isValidInfo, setIsValidInfo] = useState(false);
  const [isvalidPW, setIsValidPW] = useState(true);

  const [userinfo, setUserInfo] = useState('');
  const [password, setPassword] = useState('');

  const [credientialType, setcredientialType] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    try {
      const userCountry = countries[getCountry()];
      setcountry(userCountry);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    dispatch(setError(null));
  }, []);
  const loginUser = () => {
    if (
      !isValidInfo ||
      !isvalidPW ||
      !userinfo ||
      !password ||
      password.length < 6
    ) {
      dispatch(setError('Please enter valid email and password'));
    } else {
      signInUser(dispatch, credientialType, userinfo, password);
    }
  };

  const isNumeric = value => {
    return /^-?\d+$/.test(value);
  };

  const validateEmail = () => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(userinfo).toLowerCase())) {
      setIsValidInfo(true);
      dispatch(setError(null));
    } else {
      setIsValidInfo(false);
      dispatch(setError('Please enter valid e-mail address'));
    }
  };

  const validatePhone = () => {
    var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    return re.test(userinfo);
  };

  const validateUserName = () => {
    if (userinfo.length >= 6) {
      setIsValidInfo(true);
      dispatch(setError(null));
    } else {
      setIsValidInfo(false);
      dispatch(setError('Please enter valid phone, user name or e-mail'));
    }
  };
  const validateCrediential = () => {
    if (userinfo.includes('@')) {
      setcredientialType('email');
      validateEmail();
    } else if (isNumeric(userinfo)) {
      setcredientialType('phone');
      if (validatePhone()) {
        setIsValidInfo(true);
        dispatch(setError(null));
      } else {
        setIsValidInfo(false);
        dispatch(setError('Please enter valid phone, user name or e-mail'));
      }
    } else {
      setcredientialType('username');
      validateUserName();
    }
  };

  const validatePW = () => {
    if (password.length >= 6) {
      setIsValidPW(true);
    } else {
      setIsValidPW(false);
      dispatch(setError('Please enter valid password'));
    }
  };
  const switchShowPassword = () => {
    if (showPassword) {
      setshowPassword(false);
    } else {
      setshowPassword(true);
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
        state={userinfo}
        onChangeText={setUserInfo}
        onEndEditing={validateCrediential}
      />
      <AuthInput
        label={'Password'}
        iconname={'Hide'}
        iconOnPress={() => switchShowPassword()}
        state={password}
        onChangeText={setPassword}
        secureTextEntry={!showPassword ? true : null}
        onEndEditing={validatePW}
        keyboardType={'default'}
      />

      <View style={styles.errormessagecontainer}>
        {user.errorMessage ? (
          <Text style={{fontSize: 16, color: 'red'}}>{user.errorMessage}</Text>
        ) : null}
      </View>

      <AuthButton
        onPress={() => loginUser()}
        label={'Log In'}
        pressable={isValidInfo && isvalidPW}></AuthButton>

      <TouchableOpacity
        onPress={() => navigation.navigate('Help')}
        style={styles.smalltextscontainer}>
        <Text style={styles.shadytext}>Forgot your login details? </Text>
        <Text style={styles.blacktext}>Get help logging in.</Text>
      </TouchableOpacity>
      <Text style={styles.ortext}>
        ----------------------------OR--------------------------------
      </Text>
      <TouchableOpacity
        onPress={() => loginWithFacebook(dispatch)}
        style={styles.smalltextscontainer}>
        <Icon name={'Facebook'} scale={0.7} />
        <Text style={styles.bluetext}> Log in with Facebook</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => {
            dispatch(setError(null));
            navigation.navigate('Username', {country: country});
          }}
          style={styles.secondoptioncontainer}>
          <Text style={styles.shadytext}>Don't have an account? </Text>
          <Text style={styles.blacktext}> Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignInScreen;
