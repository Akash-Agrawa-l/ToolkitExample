import RootRouter from './src/router';
import React from 'react';
import {Provider} from 'react-redux';
import store from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <RootRouter />
    </Provider>
  );
};

export default App;
