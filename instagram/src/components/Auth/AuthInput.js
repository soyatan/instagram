import React from 'react';

import {View, TextInput, Image} from 'react-native';
import {ImageLink} from '../../Assets/Images';
import styles from './styles';

export default AuthInput = ({
  iconname,
  label,
  secureTextEntry,
  keyboardType,
  onEndEditing,
  state,
  onChangeText,
}) => {
  return (
    <>
      <View style={styles.authinputcontainer}>
        <Image style={styles.image} source={ImageLink[iconname]} />
        <TextInput
          style={styles.textinput}
          label={label}
          placeholder={label}
          autoCorrect={false}
          autoCapitalize="none"
          placeholderTextColor="purple"
          selectionColor="white"
          onChangeText={onChangeText}
          value={state}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          onEndEditing={onEndEditing}
        />
      </View>
    </>
  );
};
