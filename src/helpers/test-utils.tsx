import React, { FC, ReactElement } from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from '../redux/store/store';
import { Movie } from '../components/movie/movie';

interface MoviesRenderParams {
  movies?: {
    isLoading: boolean;
    error: boolean;
    data: Movie[];
  };
}

const moviesState: MoviesRenderParams = {
  movies: {
    isLoading: false,
    error: false,
    data: [],
  },
};

export function renderWithStore(component: ReactElement, initialState = moviesState) {
  const Wrapper: FC = ({ children }) => (
    <Provider store={createStore(rootReducer, initialState, applyMiddleware(thunk))}>
      {children}
    </Provider>
  );
  return render(component, { wrapper: Wrapper });
}
