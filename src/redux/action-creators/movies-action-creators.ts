import { Movie } from '../../components/movie/movie';

export const MOVIES_START = 'MOVIES_START';
export const MOVIES_DONE = 'MOVIES_DONE';
export const MOVIES_ERROR = 'MOVIES_ERROR';

export const moviesStartAction = () => ({
  type: MOVIES_START,
});

export const moviesDoneAction = (movies: Movie[]) => ({
  type: MOVIES_DONE,
  payload: movies,
});

export const moviesErrorAction = (error: string) => ({
  type: MOVIES_ERROR,
  payload: error,
});
