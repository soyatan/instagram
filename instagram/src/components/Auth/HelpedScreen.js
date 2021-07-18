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

const HelpedScreen = ({route, navigation}) => {
  const user = useSelector(userSelector);

  const [isValidInfo, setIsValidInfo] = useState(false);

  const [userinfo, setUserInfo] = useState('');

  const [credientialType, setcredientialType] = useState('');
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.headertext}>Login Help</Text>

      <Text style={styles.bigblacktext}>Find Your Account</Text>
      <View style={styles.longtextcontainer}>
        <Text style={styles.shadytext}>
          Password reset link has been sent to {route.params.email}.
        </Text>
      </View>

      <AuthButton
        label={'Go to login page'}
        pressable={true}
        onPress={() => navigation.navigate('Signinad')}></AuthButton>

      <TouchableOpacity
        onPress={() => navigation.navigate('Help Center')}
        style={styles.bottomtextcontainerdeep}>
        <Text style={styles.bottombluetext}> Need more help?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HelpedScreen;
