import React from 'react';
import userEvent from '@testing-library/user-event/dist';
import { render, screen } from '@testing-library/react';
import MovieCard from './movie-card';

const movie = {
  id: 1,
  poster_path: 'www.fake-img.om',
  release_date: '2019',
  title: 'Movie1',
  genres: 'drama'
};

describe('Movie-card component', () => {
  it('should select an item on click at movie-card', () => {
    const onMovieSelected = jest.fn();
    render(<MovieCard data={movie} onMovieSelected={onMovieSelected}/>);
    userEvent.click(screen.getByRole('presentation'));
    expect(onMovieSelected).toHaveBeenCalled();
  });
});