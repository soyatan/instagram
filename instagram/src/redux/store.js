import {applyMiddleware, combineReducers, createStore} from 'redux';
import createSagaMiddleWare from 'redux-saga';

import root from './saga/root';
import REDUX_PERSIST from './ReduxPersistConfig';
import {persistStore, persistReducer} from 'redux-persist';

import {userReducer} from './userReducer';
import {storyReducer} from './storyReducer';
import {postsReducer} from './postsReducer';
import {commentsReducer} from './commentsReducer';
import {popularUserReducer} from './popularUserReducer';
import {selfPostsReducer} from './selfPostsReducer';

const combinedReducer = combineReducers({
  userState: userReducer,
  storyState: storyReducer,
  postsState: postsReducer,
  commentsState: commentsReducer,
  popularUserState: popularUserReducer,
  selfPostsState: selfPostsReducer,
});

let persistedReducer = combinedReducer;

if (REDUX_PERSIST.active) {
  const persistConfig = REDUX_PERSIST.storeConfig;
  persistedReducer = persistReducer(persistConfig, combinedReducer);
}

const sagaMiddleware = createSagaMiddleWare();
const middleWares = [sagaMiddleware];
const store = createStore(persistedReducer, applyMiddleware(...middleWares));
const persistor = persistStore(store);

sagaMiddleware.run(root);

export const storey = () => {
  return {store, persistor};
};
