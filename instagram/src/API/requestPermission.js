import {PermissionsAndroid} from 'react-native';

export const requestStoragePermission = async (callback: any) => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: 'Galeri kaydetme izni gerekiyor',
        message: 'Fotoğrafınızın galeriye kaydedilmesi için izin veriniz',
        buttonNeutral: 'Daha sonra sor',
        buttonNegative: 'İptal',
        buttonPositive: 'Tamam',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('✅İzin verildi');
      callback();
    } else {
      console.log('❌İzin verilmedi');
    }
  } catch (err) {
    console.warn(err);
  }
};
