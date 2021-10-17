import React from 'react';
import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
import { MovieDetails } from '../../components/movie/movie-details';
import { store } from '../../redux/store';
import { GlobalStyles } from '../../components/app/app.styled';
import { SearchInfo } from '../../components/search-info';
import { MovieList } from '../../components/movie/movie-list';

export default function MovieId({ pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <MovieDetails />
      <SearchInfo {...pageProps} />
      <MovieList />
    </Provider>
  );
}
