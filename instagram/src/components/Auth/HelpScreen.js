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

const HelpScreen = ({route, navigation}) => {
  const user = useSelector(userSelector);
  const [isvalidEmail, setIsValidEmail] = useState(true);
  const [isvalidPW, setIsValidPW] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isSignIn, setisSignIn] = useState('none');

  const dispatch = useDispatch();

  const switchToSignUp = () => {
    setisSignIn('sign up');
  };
  const switchToSignIn = () => {
    setisSignIn('sign in');
  };

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
        state={email}
        onChangeText={setEmail}
        onEndEditing={validateEmail}
      />

      <AuthButton label={'Next'}></AuthButton>

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
