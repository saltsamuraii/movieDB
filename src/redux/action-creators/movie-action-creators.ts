import { Movie } from '../../components/movie/movie';

export const MOVIE_START = 'MOVIE_START';
export const MOVIE_LOAD = 'MOVIE_LOAD';
export const MOVIE_RESET = 'MOVIE_RESET';
export const MOVIE_ERROR = 'MOVIE_ERROR';

export const movieStartAction = () => ({
  type: MOVIE_START,
});

export const movieLoadAction = (movie: Movie) => ({
  type: MOVIE_LOAD,
  payload: movie,
});

export const movieResetAction = () => ({
  type: MOVIE_RESET,
});

export const movieErrorAction = (error: string) => ({
  type: MOVIE_ERROR,
  payload: error,
});
