import React from 'react';
import './config/ReactotronConfig';

import { Provider } from 'react-redux';
import store from './store';

import Routes from './router';

console.tron.log('testando');

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
