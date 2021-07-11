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

const PasswordScreen = ({route, navigation}) => {
  const user = useSelector(userSelector);

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
      createPassword();
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

  return (
    <View style={styles.container}>
      <Text style={styles.bigblacktext}>Create a Password</Text>
      <View style={styles.longtextcontainer}>
        <Text style={styles.shadytext}>
          For security, your password must be 6 characters or more.
        </Text>
      </View>

      <AuthInput
        label={'Password'}
        state={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        onEndEditing={validatePW}
        keyboardType={'default'}
      />
      <TouchableOpacity
        onPress={() => switchSelected()}
        style={styles.remembercontainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelected}
          style={styles.checkbox}
        />
        <Text style={styles.shadytext}> Remember Password</Text>
      </TouchableOpacity>
      {user.errorMessage ? (
        <View style={styles.errormessagecontainer}>
          <Text style={{fontSize: 16, color: 'red'}}>{user.errorMessage}</Text>
        </View>
      ) : null}
      <AuthButton
        onPress={() => loginUser()}
        label={'Next'}
        pressable={isvalidPW}></AuthButton>
    </View>
  );
};

export default PasswordScreen;
