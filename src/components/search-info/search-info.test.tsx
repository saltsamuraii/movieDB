import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import SearchInfo from './search-info';
import { Movie } from '../movie/movie';
import { moviesReducer } from '../../redux/reducers';

describe('SearchInfo component', () => {
  let movies: Movie[];
  beforeEach(() => {
    movies = [
      { id: 1, release_date: '2014', title: 'Movie', genres: 'drama', poster_path: 'www.www.www' },
      { id: 2, release_date: '2014', title: 'Movie2', genres: 'drama', poster_path: 'www.www.www' },
      { id: 3, release_date: '2014', title: 'Movie3', genres: 'genre', poster_path: 'www.www.www' },
      {
        id: 4,
        release_date: '2014',
        title: 'Movie4',
        genres: 'action',
        poster_path: 'www.www.www',
      },
    ];
  });
  it('should render number of movies in text', () => {
    const rootReducer = combineReducers({
      movies: moviesReducer,
    });
    const store = createStore(rootReducer, {
      movies: { isLoading: false, error: false, data: movies },
    });

    render(
      <Provider store={store}>
        <SearchInfo sortValue="release date" onSort={jest.fn()} />
      </Provider>
    );
    expect(screen.getByText('4 movies found')).toBeInTheDocument();
  });

  it('should render 0 movies in text', () => {
    const rootReducer = combineReducers({
      movies: moviesReducer,
    });
    const store = createStore(rootReducer, {
      movies: { isLoading: false, error: false, data: [] },
    });

    render(
      <Provider store={store}>
        <SearchInfo sortValue="release date" onSort={jest.fn()} />
      </Provider>
    );
    expect(screen.getByText('0 movies found')).toBeInTheDocument();
  });

  it('should render 1 movie in text', () => {
    movies = [
      { id: 1, release_date: '2014', title: 'Movie', genres: 'drama', poster_path: 'www.www.www' },
    ];
    const rootReducer = combineReducers({
      movies: moviesReducer,
    });
    const store = createStore(rootReducer, {
      movies: { isLoading: false, error: false, data: movies },
    });

    render(
      <Provider store={store}>
        <SearchInfo sortValue="release date" onSort={jest.fn()} />
      </Provider>
    );
    expect(screen.getByText('1 movie found')).toBeInTheDocument();
  });

  it('sortValue with release date should be defaultChecked', () => {
    const rootReducer = combineReducers({
      movies: moviesReducer,
    });
    const store = createStore(rootReducer, {
      movies: { isLoading: false, error: false, data: [] },
    });

    render(
      <Provider store={store}>
        <SearchInfo sortValue="release date" onSort={jest.fn()} />
      </Provider>
    );
    expect(screen.getByLabelText('release date')).toBeChecked();
  });

  it('rating should not to be checked by default', () => {
    const rootReducer = combineReducers({
      movies: moviesReducer,
    });
    const store = createStore(rootReducer, {
      movies: { isLoading: false, error: false, data: [] },
    });

    render(
      <Provider store={store}>
        <SearchInfo sortValue="release date" onSort={jest.fn()} />
      </Provider>
    );
    expect(screen.getByLabelText('rating')).not.toBeChecked();
  });

  it('method onSort should be called on click', () => {
    const rootReducer = combineReducers({
      movies: moviesReducer,
    });
    const store = createStore(rootReducer, {
      movies: { isLoading: false, error: false, data: [] },
    });

    const onSort = jest.fn();
    render(
      <Provider store={store}>
        <SearchInfo sortValue="release date" onSort={onSort} />
      </Provider>
    );
    userEvent.click(screen.getAllByRole('radio')[1]);
    expect(onSort).toHaveBeenCalled();
  });
});
