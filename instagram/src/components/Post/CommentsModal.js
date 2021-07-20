import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  TouchableOpacity,
  ImageBackground,
  Button,
  Text,
  PermissionsAndroid,
  TextInput,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {dirPicutures} from '../../API/fsFunctions';

import CameraRoll from '@react-native-community/cameraroll';
import {requestStoragePermission} from '../../API/requestPermission';
import {CaptureButton} from '../Camera/CaptureButton';
import {ConfirmButton} from '../Camera/ConfirmButton';
import {CameraGrid} from '../Camera/CameraGrid';
import ImagePicker from 'react-native-image-crop-picker';

import {useDispatch, useSelector} from 'react-redux';
import {userSelector} from '../../redux/userReducer';
import styles from './styles';
import {TouchableIcon} from '../../Assets/Svgs/touchableIcon';
import {ProfilePhotoSmall} from '../Blog/ProfilePhotoSmall';
import {PhotoPreview} from '../Camera/PhotoPreview';
import {uploadImage, uploadPP} from '../../API/storageFunctions';
import {PreviewScreen} from '../Camera/PreviewScreen';
import {FlatList} from 'react-native-gesture-handler';
import {ProfilePhotoSmaller} from './../Blog/ProfilePhotoSmaller';
import {CommentContainer} from './../Blog/CommentContainer';
import {addCommentToPosts} from './../../redux/postsReducer';

const CommentsScreen = ({route, navigation}) => {
  const [comment, setcomment] = useState('');
  const {comments, pplink, postId, posterId, userName} = route.params;
  //const [timeTag, settimeTag] = useState('');
  const dispatch = useDispatch();
  const addComment = () => {
    dispatch(addCommentToPosts(posterId, postId, userName, comment));
  };
  const calculateTimeText = item => {
    const timePassed = (-item + Date.now()) / 1000;

    if (Math.round(timePassed) <= 60) {
      return `${Math.round(timePassed)} seconds ago`;
    } else if (Math.round(timePassed) <= 3600) {
      return `${Math.round(timePassed / 60)} minutes ago`;
    } else if (
      (Math.round(timePassed) > 3600) &
      (Math.round(timePassed) < 7200)
    ) {
      return `1 hour ago`;
    } else if (
      (Math.round(timePassed) >= 7200) &
      (Math.round(timePassed) < 86400)
    ) {
      return `${Math.round(timePassed / 3600)} hours ago`;
    } else if (
      (Math.round(timePassed) >= 86400) &
      (Math.round(timePassed) < 172800)
    ) {
      return `1 day ago`;
    } else {
      return `${Math.round(timePassed / 86400)} days ago`;
    }
  };

  return (
    <View style={styles.commentscontainer}>
      <View style={[styles.headercontainer, {marginBottom: 30}]}>
        <TouchableIcon
          onPress={() => navigation.goBack()}
          name={'Left'}
          scale={1.4}
        />
        <Text style={styles.bigblacktext}>Comments</Text>
      </View>
      <FlatList
        data={comments}
        style={{flex: 1, width: '100%'}}
        renderItem={({item}) => {
          return (
            <View style={styles.comment}>
              <View style={{flexDirection: 'row', paddingBottom: 10}}>
                <ProfilePhotoSmaller source={item.commenterPP} />
                <View style={styles.commenttext}>
                  <Text style={styles.normaltext}>
                    <Text style={styles.blacktext}>
                      {`${item.commenterName} `}
                    </Text>
                    {item.comment}
                  </Text>
                </View>
              </View>
              <Text style={[styles.shadytext, {paddingLeft: 50}]}>
                {calculateTimeText(item.commentDate)}
              </Text>
            </View>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />
      <CommentContainer
        pplink={pplink}
        comment={comment}
        setcomment={setcomment}
        onEndEditing={() => addComment()}
      />
    </View>
  );
};
export default CommentsScreen;
