import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {Icon} from '../../Assets/Svgs/icon';
import styles from './styles';
import {TouchableIcon} from './../../Assets/Svgs/touchableIcon';

import {ProfilePhotoSmaller} from './ProfilePhotoSmaller';

export const CommentContainer = ({pplink}) => {
  const [comment, setcomment] = useState('');

  return (
    <View style={styles.commentcontainer}>
      <ProfilePhotoSmaller source={pplink} />
      <TextInput
        style={styles.textinput}
        label={'Add a comment...'}
        placeholder={'Add a comment...'}
        autoCorrect={false}
        autoCapitalize="none"
        placeholderTextColor="black"
        selectionColor="blue"
        onChangeText={setcomment}
        value={comment}
        keyboardType={'default'}
      />
    </View>
  );
};
