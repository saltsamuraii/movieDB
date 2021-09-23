import React from 'react';
import { render, screen } from '@testing-library/react';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import MovieList from './movie-list';
import { moviesReducer } from '../../../redux/reducers';
import { Movie } from '../movie';

describe('MovieList component', () => {
  let movies: Movie[];
  beforeEach(() => {
    movies = [
      { id: 1, release_date: '2014', title: 'Movie', genres: 'drama', poster_path: 'www.www.www' },
      { id: 2, release_date: '2014', title: 'Movie', genres: 'drama', poster_path: 'www.www.www' },
    ];
  });

  it('render a message if no movies founds', () => {
    const rootReducer = combineReducers({
      movies: moviesReducer,
    });
    const store = createStore(rootReducer, {
      movies: { isLoading: false, error: false, data: [] },
    });

    render(
      <Provider store={store}>
        <MovieList onMovieSelected={jest.fn()} />
      </Provider>
    );
    expect(screen.getByText('No movies found')).toBeInTheDocument();
  });

  it('render a message if loading is true', () => {
    const rootReducer = combineReducers({
      movies: moviesReducer,
    });
    const store = createStore(rootReducer, { movies: { isLoading: true, error: false, data: [] } });

    render(
      <Provider store={store}>
        <MovieList onMovieSelected={jest.fn()} />
      </Provider>
    );
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('rendered movies length to be equal movies length', () => {
    const rootReducer = combineReducers({
      movies: moviesReducer,
    });
    const store = createStore(rootReducer, {
      movies: { data: movies, isLoading: false, error: false },
    });

    render(
      <Provider store={store}>
        <MovieList onMovieSelected={jest.fn()} />
      </Provider>
    );
    const renderedMovies = screen.getAllByRole('listitem');
    expect(renderedMovies.length).toEqual(2);
  });
});
