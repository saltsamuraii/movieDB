import { AnyAction } from 'redux';
import { MOVIES_DONE, MOVIES_ERROR, MOVIES_START } from '../action-creators';
import { moviesInitialState } from '../store';

export const moviesReducer = (state = moviesInitialState, action: AnyAction) => {
  switch (action.type) {
    case MOVIES_START:
      return { ...state, data: [], isLoading: true };
    case MOVIES_DONE:
      return { ...state, data: action.payload, isLoading: false };
    case MOVIES_ERROR:
      return { ...state, data: [], error: action.payload };
    default:
      return state;
  }
};
