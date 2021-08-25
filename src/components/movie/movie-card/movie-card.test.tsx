import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import MovieCard from './movie-card';
import { Movie } from '../movie';


describe('MovieCard component', () => {
  let movieData: Movie;
  beforeEach(() => {
    movieData =
      {
        id: 1,
        poster_path: 'https://allmovies.tube/assets/img/no-poster.png',
        release_date: '2019',
        title: 'Movie1',
        genres: 'drama'
      }
  });

  it('should select an item on click at movie-card', () => {
    const onMovieSelected = jest.fn();
    render(<MovieCard data={movieData} onMovieSelected={onMovieSelected}/>);
    userEvent.click(screen.getByRole('presentation'));
    expect(onMovieSelected).toHaveBeenCalled();
  });

  it('MovieCard poster have an errorImage backup url attribute', () => {
    render(<MovieCard data={movieData} onMovieSelected={jest.fn()}/>);
    expect(screen.getByRole('presentation')).toHaveAttribute('src', 'https://allmovies.tube/assets/img/no-poster.png');
  });
});