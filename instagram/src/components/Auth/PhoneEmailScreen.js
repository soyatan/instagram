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

const PhoneEmailScreen = ({route, navigation}) => {
  const user = useSelector(userSelector);
  console.log(route.params);
  const [isvalidPW, setIsValidPW] = useState(false);

  const [password, setPassword] = useState('');
  const [isSelected, setSelected] = useState(false);

  const dispatch = useDispatch();
  const createPassword = () => {
    if (!isvalidPW || !password || password.length < 4) {
      dispatch(setError('Please enter valid password'));
    } else {
      if (route.params.country) {
        navigation.navigate('Finalize', {
          country: route.params.country,
          username: route.params.username,
          password: password,
        });
      } else {
        navigation.navigate('Finalize', {
          country: '',
          username: route.params.username,
          password: password,
        });
      }
    }
  };
  const loginUser = () => {
    if (!isvalidPW || !password || password.length < 4) {
      dispatch(setError('Please enter valid email and password'));
    } else {
      signInUser(dispatch, userinfo, password);
    }
  };
  useEffect(() => {
    if (password !== '') {
      validatePW();
    }
  }, [password]);

  const validatePW = () => {
    if (password.length >= 4) {
      setIsValidPW(true);
      dispatch(setError(null));
    } else {
      setIsValidPW(false);
      dispatch(setError('Please enter valid password'));
    }
  };
  const switchSelected = () => {
    if (isSelected) {
      setSelected(false);
    } else {
      setSelected(true);
    }
  };
  const addPhoneEmail = () => {
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
          We'll add the email and phone number to your account. This step is
          optional.
        </Text>
      </View>

      <AuthButton
        onPress={() => loginUser()}
        label={'Complete Sign Up'}
        pressable={true}></AuthButton>
      <TouchableOpacity style={styles.smalltextscontainer}>
        <Text style={styles.bluetext}> Add New Phone or Email</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => addPhoneEmail()} style={styles.footer}>
        <Text style={styles.shadytext}>
          We'll add private info to {route.params.username}. See
        </Text>
        <Text style={styles.blacktext}>BOOKİE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PhoneEmailScreen;
