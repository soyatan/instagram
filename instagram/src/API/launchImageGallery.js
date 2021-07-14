import ImagePicker from 'react-native-image-picker';

export const imageGalleryLaunch = () => {
  let options = {
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  ImagePicker.launchImageLibrary(options, res => {
    console.log('Response = ', res);

    if (res.didCancel) {
      console.log('User cancelled image picker');
    } else if (res.error) {
      console.log('ImagePicker Error: ', res.error);
    } else if (res.customButton) {
      console.log('User tapped custom button: ', res.customButton);
      alert(res.customButton);
    } else {
      const source = {uri: res.uri};
      console.log('response', JSON.stringify(res));
      this.setState({
        filePath: res,
        fileData: res.data,
        fileUri: res.uri,
      });
    }
  });
};
