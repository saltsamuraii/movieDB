import React from 'react';
import { Provider } from 'react-redux';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { store } from '../redux/store';
import { GlobalStyles } from '../components/app/app.styled';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Movie Finder</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <GlobalStyles />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
