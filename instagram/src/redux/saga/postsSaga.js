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

function connect(userId) {
  return new Promise(resolve => {
    const databasef = database();
    const connectionRef = databasef.ref('users/' + userId);
    connectionRef.once('value', resolve);
  });
}

export function* updateCoin() {
  try {
    const {userId, popCoin} = yield select(userSelector);
    const snapshot = yield call(connect, userId);

    const account = snapshot.val();
    yield put(setCoins(account.popCoin));
  } catch (error) {
    console.log(error);
  }
}

export function* resetCoins() {
  try {
    yield put(resetCoinCounter());
  } catch (error) {
    console.log(error);
  }
}

export function* fetchPostsFromDb() {
  console.log('fething posts');
  const user = yield select(userSelector);

  try {
    let posts = [];
    const postList = yield firestore()
      .collection('Posts')
      .doc(user.userId)
      .collection('UserPosts')
      .get()
      .then(function (snapshot) {
        snapshot.forEach(snapshotquery => {
          posts.push(snapshotquery.data());
        });
        return posts;
      });
    yield put(setPosts(postList));
  } catch (error) {
    console.log(error);
  }
}

export function* watchPostsSaga() {
  yield takeLatest(FETCH_POSTS_REQUEST, fetchPostsFromDb);
}

const postsSaga = [fork(watchPostsSaga)];

export default postsSaga;
