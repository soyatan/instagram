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
import {fetchPostsRequest} from '../postsReducer';
import {FETCH_COMMENTS, setComments} from './../commentsReducer';

export function* fetchCommentsFromDb({payload}) {
  const user = yield select(userSelector);
  const {posterId, postId} = payload;

  try {
    const post = yield firestore()
      .collection('Posts')
      .doc(posterId)
      .collection('UserPosts')
      .doc(postId)
      .get()
      .then(function (snaphot) {
        return snaphot.data();
      });
    const comments = yield post.comments;
    yield put(setComments(comments));
  } catch (error) {
    console.log(error);
  }
}

export function* watchFetchCommentsSaga() {
  yield takeLatest(FETCH_COMMENTS, fetchCommentsFromDb);
}

const fetchCommentsSaga = [fork(watchFetchCommentsSaga)];

export default fetchCommentsSaga;
