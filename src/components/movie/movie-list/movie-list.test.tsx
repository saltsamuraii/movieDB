import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieList from './movie-list';
import { Movie } from '../movie';

describe('MovieList component', () => {
  let movies: Movie[];
  beforeEach(() => {
    movies = [
      { id: 1, title: 'Movie1', poster_path: 'poster', genres: 'genre', release_date: '2018' },
      { id: 2, title: 'Movie2', poster_path: 'poster', genres: 'genre', release_date: '2018' },
      { id: 3, title: 'Movie3', poster_path: 'poster', genres: 'genre', release_date: '2018' },
    ];
  });

  it('render a message if no movies founds', () => {
    render(<MovieList movies={[]} isLoading={false} onMovieSelected={jest.fn()}/>);
    expect(screen.getByText('No movies found')).toBeInTheDocument();
  });

  it('render a message if loading is true', () => {
    render(<MovieList movies={movies} isLoading onMovieSelected={jest.fn()}/>);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('rendered movies length to be equal movies length', () => {
    render(<MovieList movies={movies} isLoading={false} onMovieSelected={jest.fn()}/>);
    const renderedMovies = screen.getAllByRole('listitem');
    expect(renderedMovies.length).toEqual(movies.length);
  });
});