import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import '@babel/polyfill';

import Priority, { configureStore } from './src';

const store = configureStore();

render(
  <Provider store={store}>
    <Priority />
  </Provider>,
  document.getElementById('root')
);
