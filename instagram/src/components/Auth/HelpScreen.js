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
import {forgotPassword} from '../../API/firebase';

const HelpScreen = ({route, navigation}) => {
  const user = useSelector(userSelector);

  const [isValidInfo, setIsValidInfo] = useState(false);

  const [userinfo, setUserInfo] = useState('');

  const [credientialType, setcredientialType] = useState('');
  const dispatch = useDispatch();
  const helpUser = () => {
    forgotPassword(dispatch, navigation, credientialType, userinfo);
  };
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(setError(null));
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    validateCrediential();
  }, [userinfo]);
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

  const validateUserName = () => {
    if (userinfo.length >= 6) {
      setIsValidInfo(true);
      dispatch(setError(null));
    } else {
      setIsValidInfo(false);
      dispatch(setError('Please enter valid phone, user name or e-mail'));
    }
  };
  const validatePhone = () => {
    var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    return re.test(userinfo);
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

  return (
    <View style={styles.container}>
      <Text style={styles.headertext}>Login Help</Text>

      <Text style={styles.bigblacktext}>Find Your Account</Text>
      <View style={styles.longtextcontainer}>
        <Text style={styles.shadytext}>
          Enter your username or the email or phone number linked to your
          account.
        </Text>
      </View>
      <AuthInput
        label={'@131887135'}
        keyboardType={'email-address'}
        state={userinfo}
        onChangeText={setUserInfo}
        onEndEditing={validateCrediential}
      />
      <View style={styles.errormessagecontainer}>
        {user.errorMessage ? (
          <Text style={{fontSize: 16, color: 'red'}}>{user.errorMessage}</Text>
        ) : null}
      </View>
      <AuthButton
        label={'Next'}
        pressable={isValidInfo}
        onPress={() => helpUser()}></AuthButton>

      <Text style={styles.ortext}>
        ----------------------------OR--------------------------------
      </Text>
      <TouchableOpacity style={styles.smalltextscontainer}>
        <Icon name={'Facebook'} scale={0.7} />
        <Text style={styles.bluetext}> Log in with Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Help Center')}
        style={styles.bottomtextcontainer}>
        <Text style={styles.bottombluetext}> Need more help?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HelpScreen;
