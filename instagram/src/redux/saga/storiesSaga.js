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
import {FETCH_STORIES_REQUEST, setStories} from './../storyReducer';

export function* getStoriesFromDb(id) {
  try {
    let stories = [];
    const user = yield firestore()
      .collection('Users')
      .doc(id)
      .get()
      .then(function (snapshot) {
        let user = snapshot.data();

        return user;
      });

    const storyList = yield firestore()
      .collection('Posts')
      .doc(id)
      .collection('UserStories')
      .orderBy('postdate', 'desc')
      .get()
      .then(function (snapshot) {
        snapshot.forEach(snapshotquery => {
          if (snapshotquery.data()) {
            stories.push({
              ...snapshotquery.data(),
              posterId: user.uid,
              posterName: user.username,
              pplink: user.pplink,
              postId: snapshotquery.id,
            });
          }
        });
        return stories;
      });

    return storyList;
  } catch (error) {
    console.log(error);
  }
}
export function* fetchUser(id) {
  const newAccount = yield firestore()
    .collection('Users')
    .doc(id)
    .get()
    .then(function (snapshot) {
      let newAccount = snapshot.data();
      return newAccount;
    });

  yield put(
    setUserAndError(
      newAccount.country,
      newAccount.username,
      newAccount.uid,
      newAccount.phonenumber,
      newAccount.email,
      'firebase',
      null,
      newAccount.pplink,
      newAccount.followers,
      newAccount.following,
    ),
  );
}
export function* mergeLists(lists) {
  const newList = [].concat.apply([], lists);

  return newList;
}

export function* setFetchList() {
  const user = yield select(userSelector);
  const usersToFetch = yield [...user.following, user.userId];

  const finalList = yield all(
    usersToFetch.map(pplid => call(getStoriesFromDb, pplid)),
  );
  //const stories = yield call(mergeLists, finalList);
  yield put(setStories(finalList));
}

export function* createListToFetchFromDb() {
  const user = yield select(userSelector);
  yield call(fetchUser, user.userId);
  yield call(setFetchList, user.userId);
}

export function* watchStoriesSaga() {
  yield takeLatest(FETCH_STORIES_REQUEST, createListToFetchFromDb);
}

const storiesSaga = [fork(watchStoriesSaga)];

export default storiesSaga;
