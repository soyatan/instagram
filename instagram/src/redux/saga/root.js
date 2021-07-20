import {all} from 'redux-saga/effects';
import commentsSaga from './commentsSaga';
import favoriteSaga from './favoriteSaga';
import likeSaga from './likesSaga';
import postsSaga from './postsSaga';

export default function* root() {
  yield all([...postsSaga, ...favoriteSaga, ...likeSaga, ...commentsSaga]);
}
