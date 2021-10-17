import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Movie } from '../../components/movie/movie';
import { movieLoadReducer, moviesReducer } from '../reducers';
import { loggerMiddleware } from '../middleware/logger';
import { movieInitialState, moviesInitialState } from '../initial-state';

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

const initialState: MoviesState = {
  movies: moviesInitialState,
  movie: movieInitialState,
};

export const rootReducer = combineReducers({
  movies: moviesReducer,
  movie: movieLoadReducer,
});

export const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk, loggerMiddleware)
);
