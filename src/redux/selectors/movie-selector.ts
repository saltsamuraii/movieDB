import { createSelector } from 'reselect';
import { MoviesState } from '../store/store';

export const getMovie = createSelector(
  (state: MoviesState) => state.movie.data,
  (data) => data
);
