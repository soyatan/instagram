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
import {userSelector} from '../userReducer';
import database from '@react-native-firebase/database';

import {eventChannel} from 'redux-saga';
import {useFocusEffect} from '@react-navigation/native';
import {FETCH_POSTS_REQUEST} from '../postsReducer';

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
  const coins = yield select(coinSelector);
  const {userId, popCoin} = yield select(userSelector);

  try {
    database()
      .ref('users/' + userId)
      .update({
        popCoin: popCoin + coins,
      })
      .then(yield all([call(updateCoin), call(resetCoins)]));
  } catch (error) {
    console.log(error);
  }
}

export function* watchPostsSaga() {
  yield takeLatest(FETCH_POSTS_REQUEST, fetchPostsFromDb);
}

const postsSaga = [fork(watchPostsSaga)];

export default postsSaga;
