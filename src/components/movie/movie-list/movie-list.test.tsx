import React from 'react';
import { screen } from '@testing-library/react';
import MovieList from './movie-list';
import { Movie } from '../movie';
import { renderWithStore } from '../../../helpers/test-utils';

describe('MovieList component', () => {
  let movies: Movie[];
  beforeEach(() => {
    movies = [
      { id: 1, release_date: '2014', title: 'Movie', genres: 'drama', poster_path: 'www.www.www' },
      { id: 2, release_date: '2014', title: 'Movie', genres: 'drama', poster_path: 'www.www.www' },
    ];
  });
  it('render a message if no movies founds', () => {
    renderWithStore(<MovieList onMovieSelected={jest.fn()} />);
    expect(screen.getByText('No movies found')).toBeInTheDocument();
  });

  it('render a message if loading is true', () => {
    renderWithStore(<MovieList onMovieSelected={jest.fn()} />, {
      movies: { data: [], error: false, isLoading: true },
    });
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('rendered movies length to be equal movies length', () => {
    renderWithStore(<MovieList onMovieSelected={jest.fn()} />, {
      movies: { data: movies, error: false, isLoading: false },
    });
    const renderedMovies = screen.getAllByRole('listitem');
    expect(renderedMovies.length).toEqual(2);
  });
});
