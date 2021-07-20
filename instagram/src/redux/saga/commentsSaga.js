import {
  takeEvery,
  fork,
  select,
  put,
  take,
  apply,
  delay,
  call,
  race,
  all,
  effectTypes,
  takeLatest,
} from 'redux-saga/effects';
import firestore from '@react-native-firebase/firestore';
import {userSelector} from '../userReducer';
import database from '@react-native-firebase/database';
import auth, {firebase} from '@react-native-firebase/auth';
import {eventChannel} from 'redux-saga';
import {useFocusEffect} from '@react-navigation/native';
import {ADD_POST_COMMENT, ADD_POST_LIKE} from '../postsReducer';
import {fetchPostsRequest} from './../postsReducer';

export function* addCommentToPost({payload}) {
  const user = yield select(userSelector);
  const {posterId, postId, comment, posterName} = payload;

  try {
    const newPost = {
      commenterName: user.userName,
      comment: comment,
      commenterPP: user.pplink,
      commentDate: Date.now(),
    };
    yield firestore()
      .collection('Posts')
      .doc(posterId)
      .collection('UserPosts')
      .doc(postId)
      .update({
        comments: firestore.FieldValue.arrayUnion(newPost),
      })
      .then(yield put(fetchPostsRequest()));
  } catch (error) {
    console.log(error);
  }
}

export function* watchCommentsSaga() {
  yield takeLatest(ADD_POST_COMMENT, addCommentToPost);
}

const commentsSaga = [fork(watchCommentsSaga)];

export default commentsSaga;
