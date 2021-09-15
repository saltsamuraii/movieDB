import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import SearchInfo from './search-info';
import { Movie } from '../movie/movie';

describe('SearchInfo component', () => {
  let movies: Movie[];
  beforeEach(() => {
    movies = [
      { id: 1, title: 'Movie1', poster_path: 'poster', genres: 'genre', release_date: '2018' },
      { id: 2, title: 'Movie2', poster_path: 'poster', genres: 'genre', release_date: '2018' },
      { id: 3, title: 'Movie3', poster_path: 'poster', genres: 'genre', release_date: '2018' },
      { id: 4, title: 'Movie4', poster_path: 'poster', genres: 'genre', release_date: '2018' },
      { id: 5, title: 'Movie5', poster_path: 'poster', genres: 'genre', release_date: '2018' },
      { id: 6, title: 'Movie6', poster_path: 'poster', genres: 'genre', release_date: '2018' },
      { id: 7, title: 'Movie7', poster_path: 'poster', genres: 'genre', release_date: '2018' },
      { id: 8, title: 'Movie8', poster_path: 'poster', genres: 'genre', release_date: '2018' },
      { id: 9, title: 'Movie9', poster_path: 'poster', genres: 'genre', release_date: '2018' },
      { id: 10, title: 'Movie10', poster_path: 'poster', genres: 'genre', release_date: '2018' },
    ];
  });
  it('should render movieResult text', () => {
    render(<SearchInfo movies={movies} sortValue="release date" onSort={jest.fn()} />);
    expect(screen.getByText('10 movies found')).toBeInTheDocument();
  });

  it('sortValue with release date should be defaultChecked', () => {
    render(<SearchInfo sortValue="release date" movies={movies} onSort={jest.fn()} />);
    expect(screen.getByLabelText('release date')).toBeChecked();
  });

  it('rating should not to be checked by default', () => {
    render(<SearchInfo sortValue="release date" movies={movies} onSort={jest.fn()} />);
    expect(screen.getByLabelText('rating')).not.toBeChecked();
  });

  it('method onSort should be called on click', () => {
    const onSort = jest.fn();
    render(<SearchInfo sortValue="release date" movies={movies} onSort={onSort} />);
    userEvent.click(screen.getAllByRole('radio')[1]);
    expect(onSort).toHaveBeenCalled();
  });
});
