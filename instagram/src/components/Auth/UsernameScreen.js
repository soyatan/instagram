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

const UsernameScreen = ({route, navigation}) => {
  const user = useSelector(userSelector);

  const [isValidInfo, setIsValidInfo] = useState(false);

  const [userName, setUserName] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    if (userName !== '') validateUserName();
  }, [userName]);

  const createUsername = () => {
    if (!isValidInfo) {
      dispatch(setError('Please enter valid email and password'));
    } else {
      if (route.params.country) {
        navigation.navigate('Password', {
          country: route.params.country,
          username: userName,
        });
      } else {
        navigation.navigate('Password', {
          country: '',
          username: userName,
        });
      }
    }
  };

  const validateUserName = () => {
    if (userName.length >= 4) {
      setIsValidInfo(true);
      dispatch(setError(null));
    } else {
      setIsValidInfo(false);
      dispatch(setError('Please enter valid user name'));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.bigblacktext}>Choose Username</Text>
      <View style={styles.longtextcontainer}>
        <Text style={styles.shadytext}>You can always change it later.</Text>
      </View>
      <AuthInput
        label={'Username'}
        keyboardType={'default'}
        state={userName}
        onChangeText={setUserName}
        onEndEditing={validateUserName}
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

export default UsernameScreen;
