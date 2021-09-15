import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import { AppContainer } from './components/app/app.container';

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);
