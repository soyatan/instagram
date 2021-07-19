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
import {FETCH_POSTS_REQUEST, setPosts} from '../postsReducer';

export function* fetchSelfPostsFromDb() {
  console.log('fething posts');
  const user = yield select(userSelector);
  //console.log('user', user);

  try {
    let posts = [];
    const postList = yield firestore()
      .collection('Posts')
      .doc(user.userId)
      .collection('UserPosts')
      .orderBy('postdate', 'desc')
      .get()
      .then(function (snapshot) {
        snapshot.forEach(snapshotquery => {
          posts.push({
            ...snapshotquery.data(),
            posterId: user.userId,
            posterName: user.userName,
            pplink: user.pplink,
          });
        });
        return posts;
      });
    yield put(setPosts(postList));
  } catch (error) {
    console.log(error);
  }
}

export function* watchPostsSaga() {
  yield takeLatest(FETCH_POSTS_REQUEST, fetchSelfPostsFromDb);
}

const postsSaga = [fork(watchPostsSaga)];

export default postsSaga;
