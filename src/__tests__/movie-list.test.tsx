import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import { MovieList } from '../components/movie/movie-list';

describe('MovieList', () => {
  it('element MovieList', () => {
    render(<MovieList movies={[] } isLoading onMovieSelected={event => event} />);
  })
});