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

export function* getPostsFromDb(id) {
  try {
    let posts = [];
    const user = yield firestore()
      .collection('Users')
      .doc(id)
      .get()
      .then(function (snapshot) {
        let user = snapshot.data();

        return user;
      });

    const postList = yield firestore()
      .collection('Posts')
      .doc(id)
      .collection('UserPosts')
      .orderBy('postdate', 'desc')
      .get()
      .then(function (snapshot) {
        snapshot.forEach(snapshotquery => {
          posts.push({
            ...snapshotquery.data(),
            posterId: user.uid,
            posterName: user.username,
            pplink: user.pplink,
            postId: snapshotquery.id,
          });
        });
        return posts;
      });

    return postList;
  } catch (error) {
    console.log(error);
  }
}
export function* fetchUser(id) {
  console.log('step 3', id);
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
  console.log('step 5', usersToFetch);

  const finalList = yield all(
    usersToFetch.map(pplid => call(getPostsFromDb, pplid)),
  );
  const posts = yield call(mergeLists, finalList);
  yield put(addPosts(posts));
}

export function* createListToFetchFromDb() {
  console.log('Step1');
  const user = yield select(userSelector);
  console.log('Step2', user);
  yield call(fetchUser, user.userId);
  console.log('step4');
  yield call(setFetchList, user.userId);
}

export function* watchPostsSaga() {
  yield takeLatest(FETCH_POSTS_REQUEST, createListToFetchFromDb);
}

const postsSaga = [fork(watchPostsSaga)];

export default postsSaga;
