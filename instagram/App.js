import React from 'react';
import {View, Text} from 'react-native';
import {storey} from './src/redux/store';
import {Provider} from 'react-redux';

import {StatusBar} from 'react-native';
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
