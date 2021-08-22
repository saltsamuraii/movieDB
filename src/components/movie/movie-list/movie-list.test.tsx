import React from 'react';
import { render } from '@testing-library/react';
import MovieList from './movie-list';

const movies = [
  { id: 1, title: 'Movie1', poster_path: 'poster', genres: 'genre', release_date: '2018' },
  { id: 2, title: 'Movie2', poster_path: 'poster', genres: 'genre', release_date: '2018' },
  { id: 3, title: 'Movie3', poster_path: 'poster', genres: 'genre', release_date: '2018' }
];


describe('MovieList component',  () => {
  it('should render items in component',  () => {
    render(<MovieList movies={movies} isLoading onMovieSelected={jest.fn()}/>);
    expect(movies).toBeDefined()
  })
});