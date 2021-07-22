import {all} from 'redux-saga/effects';
import commentsSaga from './commentsSaga';
import favoriteSaga from './favoriteSaga';
import fetchCommentsSaga from './fetchCommentsSaga';
import likeSaga from './likesSaga';
import postsSaga from './postsSaga';
import fetchPopularUserSaga from './fetchPopularUserSaga';
import followerSaga from './followerSaga';
import countSelfPostsSaga from './countSelfPostsSaga';

export default function* root() {
  yield all([
    ...postsSaga,
    ...favoriteSaga,
    ...likeSaga,
    ...commentsSaga,
    ...fetchCommentsSaga,
    ...fetchPopularUserSaga,
    ...followerSaga,
    ...countSelfPostsSaga,
  ]);
}
