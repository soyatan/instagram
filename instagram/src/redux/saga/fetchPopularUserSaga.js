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
import {FETCH_COMMENTS, setComments} from '../commentsReducer';
import {
  addPopularUserPhotos,
  FETCH_POPULAR_USERS,
  setPopularUsers,
} from '../popularUserReducer';

export function* addFavoritePostPhotos(user, userid, postlinks) {
  yield put(setPopularUsers(user, userid, postlinks));
}

export function* getFavoritePostPhotos(user, userid) {
  let userfavposts = [];
  const posts = yield firestore()
    .collection('Posts')
    .doc(userid)
    .collection('UserPosts')
    //.limit(3)
    .get()
    .then(function (snapshot) {
      snapshot.forEach(childsnapshot =>
        userfavposts.push(childsnapshot.data().link),
      );
      return userfavposts;
    });

  if (posts.length > 1) {
    yield call(addFavoritePostPhotos, user, userid, posts);
  }
}

export function* fetchUserCard(userid) {
  const user = yield firestore()
    .collection('Users')
    .doc(userid)
    .get()
    .then(function (snapshot) {
      return snapshot.data();
    });
  yield call(getFavoritePostPhotos, user, user.uid);
}

export function* fetchPopUsers() {
  try {
    let userIds = [];
    const users = yield firestore()
      .collection('Users')
      .get()
      .then(function (snapshot) {
        snapshot.forEach(child => {
          const user = child.data();
          userIds.push(user.uid);
        });
        return userIds;
      });
    yield all(users.map(userid => fork(fetchUserCard, userid)));
  } catch (error) {
    console.log(error);
  }
}

export function* watchFetchPopularUserSaga() {
  yield takeLatest(FETCH_POPULAR_USERS, fetchPopUsers);
}

const fetchPopularUserSaga = [fork(watchFetchPopularUserSaga)];

export default fetchPopularUserSaga;
