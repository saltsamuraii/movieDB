import React from 'react';
import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
import { store } from '../../redux/store';
import { SearchBar } from '../../components/search-bar';
import { SearchInfo } from '../../components/search-info';
import { MovieList } from '../../components/movie/movie-list';

export default function SearchMovie({ pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <SearchBar {...pageProps} />
      <SearchInfo {...pageProps} />
      <MovieList />
    </Provider>
  );
}
