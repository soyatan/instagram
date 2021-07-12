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

const EmailScreen = ({route, navigation}) => {
  const user = useSelector(userSelector);

  const [isValidInfo, setIsValidInfo] = useState(false);

  const [email, setEmail] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    if (email !== '') validateEmail();
  }, [email]);

  const createUsername = () => {
    if (!isValidInfo) {
      dispatch(setError('Please enter valid email and password'));
    } else {
      if (route.params.country) {
        navigation.navigate('Password', {
          country: route.params.country,
          username: route.params.username,
          email: email,
        });
      } else {
        navigation.navigate('Password', {
          country: '',
          username: route.params.username,
          email: email,
        });
      }
    }
  };
  const validateEmail = () => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(email).toLowerCase())) {
      setIsValidInfo(true);
      dispatch(setError(null));
    } else {
      setIsValidInfo(false);
      dispatch(setError('Please enter valid e-mail address'));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.bigblacktext}>Enter an email address</Text>
      <View style={styles.longtextcontainer}>
        <Text style={styles.shadytext}>
          Email address is required for safety.
        </Text>
      </View>
      <AuthInput
        label={'Email'}
        keyboardType={'email-address'}
        state={email}
        onChangeText={setEmail}
        onEndEditing={validateEmail}
      />
      {user.errorMessage ? (
        <View style={styles.errormessagecontainer}>
          <Text style={{fontSize: 16, color: 'red'}}>{user.errorMessage}</Text>
        </View>
      ) : null}

      <AuthButton
        onPress={() => createUsername()}
        label={'Next'}
        pressable={isValidInfo}></AuthButton>
    </View>
  );
};

export default EmailScreen;
