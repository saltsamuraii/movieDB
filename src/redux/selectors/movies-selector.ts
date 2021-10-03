import { createSelector } from 'reselect';
import { MoviesState } from '../store/store';

export const getMovies = createSelector(
  (state: MoviesState) => state.movies.data,
  (data) => data
);

export const loading = createSelector(
  (state: MoviesState) => state.movies.isLoading,
  (isLoading) => isLoading
);
