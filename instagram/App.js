import React, {useEffect} from 'react';

import {storey} from './src/redux/store';
import {Provider, useDispatch} from 'react-redux';

import {PersistGate} from 'redux-persist/integration/react';
import {MainContainer} from './src/components/Main/MainContainer';

const {store, persistor} = storey();

export default App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainContainer />
      </PersistGate>
    </Provider>
  );
};
