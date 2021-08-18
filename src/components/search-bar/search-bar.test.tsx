import React from 'react';
import userEvent from '@testing-library/user-event/dist';
import { render, screen } from '@testing-library/react';
import { SearchBar } from './index';

describe('Searchbar module', () => {
  it('should render component with correct title', () => {
    render(
      <SearchBar
        filterValue=''
        movie=''
        onSubmit={jest.fn()}
        onSearchMovie={jest.fn()}
        onFilter={jest.fn()}/>
    );
    expect(screen.getByText('Movie Finder')).toBeInTheDocument();
  });

  it('should put text into input', () => {
    const onSearchMovie = jest.fn()
    render(
      <SearchBar
        filterValue=''
        movie=''
        onSubmit={jest.fn()}
        onSearchMovie={onSearchMovie}
        onFilter={jest.fn()}/>
        );
    userEvent.type(screen.getByPlaceholderText('Search...'), 'pulp fiction')
    expect(onSearchMovie).toHaveBeenCalled()
  });
});