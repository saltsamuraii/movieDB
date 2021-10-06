import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import SearchInfo from './search-info';
import { Movie } from '../movie/movie';
import { renderWithStore } from '../../helpers/test-utils';

describe('SearchInfo component', () => {
  let movies: Movie[];
  beforeEach(() => {
    movies = [
      { id: 1, release_date: '2014', title: 'Movie1', genres: 'drama', poster_path: 'www' },
      { id: 2, release_date: '2014', title: 'Movie2', genres: 'drama', poster_path: 'www' },
      { id: 3, release_date: '2014', title: 'Movie3', genres: 'genre', poster_path: 'www' },
      { id: 4, release_date: '2014', title: 'Movie4', genres: 'genre', poster_path: 'www' },
    ];
  });
  it('should render number of movies in text', () => {
    renderWithStore(<SearchInfo sortValue="release date" onSort={jest.fn()} />, {
      movies: { data: movies, error: false, isLoading: false },
    });
    expect(screen.getByText('4 movies found')).toBeInTheDocument();
  });
  it('should render 0 movies in text', () => {
    renderWithStore(<SearchInfo sortValue="release date" onSort={jest.fn()} />, {
      movies: { data: [], error: false, isLoading: false },
    });
    expect(screen.getByText('0 movies found')).toBeInTheDocument();
  });

  it('should render 1 movie in text', () => {
    renderWithStore(<SearchInfo sortValue="release date" onSort={jest.fn()} />, {
      movies: {
        data: [
          { id: 5, release_date: '2014', title: 'Movie5', genres: 'drama', poster_path: 'www' },
        ],
        error: false,
        isLoading: false,
      },
    });
    expect(screen.getByText('1 movie found')).toBeInTheDocument();
  });

  it('sortValue with release date should be defaultChecked', () => {
    renderWithStore(<SearchInfo sortValue="release date" onSort={jest.fn()} />);
    expect(screen.getByLabelText('release date')).toBeChecked();
  });

  it('rating should not to be checked by default', () => {
    renderWithStore(<SearchInfo sortValue="release date" onSort={jest.fn()} />);
    expect(screen.getByLabelText('rating')).not.toBeChecked();
  });

  it('method onSort should be called on click', () => {
    const onSort = jest.fn();
    renderWithStore(<SearchInfo sortValue="release date" onSort={onSort} />);
    userEvent.click(screen.getAllByRole('radio', { hidden: true })[1]);
    expect(onSort).toHaveBeenCalled();
  });
});
