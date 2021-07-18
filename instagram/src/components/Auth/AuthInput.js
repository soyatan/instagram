import React from 'react';

import {View, TextInput, Image} from 'react-native';

import {Icon} from '../../Assets/Svgs/icon';

import styles from './styles';
import {TouchableIcon} from './../../Assets/Svgs/touchableIcon';

export default AuthInput = ({
  iconname,
  label,
  secureTextEntry,
  keyboardType,
  onEndEditing,
  state,
  onChangeText,
  iconOnPress,
}) => {
  return (
    <>
      <View style={styles.authinputcontainer}>
        <TextInput
          style={styles.textinput}
          label={label}
          placeholder={label}
          autoCorrect={false}
          autoCapitalize="none"
          placeholderTextColor="black"
          selectionColor="blue"
          onChangeText={onChangeText}
          value={state}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          onEndEditing={onEndEditing}
        />
        {iconname ? (
          <TouchableIcon name={iconname} scale={1} onPress={iconOnPress} />
        ) : null}
      </View>
    </>
  );
};
