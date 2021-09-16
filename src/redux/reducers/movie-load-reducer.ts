import { AnyAction } from 'redux';
import { MOVIE_ERROR, MOVIE_LOAD, MOVIE_RESET, MOVIE_START } from '../action-creators';
import { movieInitialState } from '../store';

export const movieLoadReducer = (state = movieInitialState, action: AnyAction) => {
  switch (action.type) {
    case MOVIE_START:
      return { ...state, data: undefined, isLoading: true };
    case MOVIE_LOAD:
      return { ...state, data: action.payload, isLoading: false };
    case MOVIE_RESET:
      return { ...state, data: undefined, error: false };
    case MOVIE_ERROR:
      return { ...state, data: undefined, error: action.payload };
    default:
      return state;
  }
};
