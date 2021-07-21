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
import {FOLLOW_USER_REQUEST, userSelector} from '../userReducer';
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
import {addPopularUsers} from '../popularUserReducer';

export function* followTheUser({payload}) {
  const {selfId, userId} = payload;
  try {
    yield firestore()
      .collection('Users')
      .doc(selfId)
      .update({
        following: firestore.FieldValue.arrayUnion(userId),
      })
      .then(
        yield firestore()
          .collection('Users')
          .doc(userId)
          .update({
            followers: firestore.FieldValue.arrayUnion(selfId),
          }),
      );
  } catch (error) {
    console.log(error);
  }
}

export function* watchFollowUserSaga() {
  yield takeLatest(FOLLOW_USER_REQUEST, followTheUser);
}

const followerSaga = [fork(watchFollowUserSaga)];

export default followerSaga;
