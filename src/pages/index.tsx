import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { App } from '../components/app';
import { GlobalStyles } from '../components/app/app.styled';

export default function Home() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>
  );
}
