import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { Movie } from '../../components/movie/movie';
import { movieLoadReducer, moviesReducer } from '../reducers';
import { loggerMiddleware } from '../middleware/logger';

export interface MoviesState {
  movies: {
    isLoading: boolean;
    error: boolean;
    data: Movie[];
  };
  movie: {
    isLoading: boolean;
    error: boolean;
    data?: Movie;
  };
}

export const moviesInitialState = {
  isLoading: false,
  error: false,
  data: [],
};

export const movieInitialState = {
  isLoading: false,
  error: false,
  data: undefined,
};

const initialState: MoviesState = {
  movies: moviesInitialState,
  movie: movieInitialState,
};

const rootReducer = combineReducers({
  movies: moviesReducer,
  movie: movieLoadReducer,
});

export const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk, loggerMiddleware as ThunkMiddleware)
);
