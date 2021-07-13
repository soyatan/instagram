import {PermissionsAndroid} from 'react-native';

export const requestStoragePermission = async (callback: any) => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: 'Required permission to save to gallery',
        message: 'Please give permission to save the photo to gallery.',
        buttonNeutral: 'Remind later',
        buttonNegative: 'Cancel',
        buttonPositive: 'Ok',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('✅Permission Granted');
      callback();
    } else {
      console.log('❌Access Denied');
    }
  } catch (err) {
    console.warn(err);
  }
};
