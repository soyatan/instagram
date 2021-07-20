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
import {
  ADD_POST_FAVORITE,
  FETCH_POSTS_REQUEST,
  setPosts,
} from '../postsReducer';

export function* addPostToFavorites({payload}) {
  const user = yield select(userSelector);
  const {posterId, postId, type} = payload;
  if (type === 'add') {
    try {
      yield firestore()
        .collection('Posts')
        .doc(posterId)
        .collection('UserPosts')
        .doc(postId)
        .update({
          favoriters: firestore.FieldValue.arrayUnion(user.userId),
        });
    } catch (error) {
      console.log(error);
    }
  } else if (type === 'remove') {
    try {
      yield firestore()
        .collection('Posts')
        .doc(posterId)
        .collection('UserPosts')
        .doc(postId)
        .update({
          favoriters: firestore.FieldValue.arrayRemove(user.userId),
        });
    } catch (error) {
      console.log(error);
    }
  }
}

export function* watchFavoriteSaga() {
  yield takeLatest(ADD_POST_FAVORITE, addPostToFavorites);
}

const favoriteSaga = [fork(watchFavoriteSaga)];

export default favoriteSaga;
