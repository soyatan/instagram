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
import {setUserAndError, userSelector} from '../userReducer';
import database from '@react-native-firebase/database';
import auth, {firebase} from '@react-native-firebase/auth';
import {eventChannel} from 'redux-saga';
import {useFocusEffect} from '@react-navigation/native';
import {addPosts, FETCH_POSTS_REQUEST, setPosts} from '../postsReducer';
import {countSelfPosts, COUNT_POSTS_REQUEST} from './../selfPostsReducer';

export function* countUserPosts(payload) {
  try {
    let posts = [];
    const postList = yield firestore()
      .collection('Posts')
      .doc(payload)
      .collection('UserPosts')
      .get()
      .then(function (snapshot) {
        snapshot.forEach(snapshotquery => {
          posts.push({
            ...snapshotquery.data(),
          });
        });
        return posts;
      });

    yield put(countSelfPosts(postList.length));
  } catch (error) {
    console.log(error);
  }
}

export function* getuserinfo() {
  const user = yield select(userSelector);
  yield call(countUserPosts, user.userId);
}

export function* watchCountPostsSaga() {
  yield takeLatest(COUNT_POSTS_REQUEST, getuserinfo);
}

const countSelfPostsSaga = [fork(watchCountPostsSaga)];

export default countSelfPostsSaga;
