import {all} from 'redux-saga/effects';
import postsSaga from './postsSaga';

export default function* root() {
  yield all([...postsSaga]);
}
