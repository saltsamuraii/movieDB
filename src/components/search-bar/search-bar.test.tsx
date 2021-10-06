import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { SearchBar } from './index';

describe('Searchbar module', () => {
  it('should render component with correct title', () => {
    render(
      <SearchBar
        filterValue=""
        movie=""
        onSubmit={jest.fn()}
        onSearchMovie={jest.fn()}
        onFilter={jest.fn()}
      />
    );
    expect(screen.getByText('Movie Finder')).toBeInTheDocument();
  });

  it('should have query text in input', () => {
    const onSearchMovie = jest.fn();
    render(
      <SearchBar
        filterValue=""
        movie=""
        onSubmit={jest.fn()}
        onSearchMovie={onSearchMovie}
        onFilter={jest.fn()}
      />
    );
    userEvent.type(screen.getByPlaceholderText('Search...'), 'pulp fiction');
    expect(onSearchMovie).toHaveBeenCalled();
  });

  it('filter value with title should be defaultChecked', () => {
    render(
      <SearchBar
        filterValue="title"
        movie=""
        onSubmit={jest.fn()}
        onSearchMovie={jest.fn()}
        onFilter={jest.fn()}
      />
    );
    expect(screen.getByLabelText('title')).toBeChecked();
  });

  it('genre should not to be checked by default', () => {
    render(
      <SearchBar
        filterValue="title"
        movie=""
        onSubmit={jest.fn()}
        onSearchMovie={jest.fn()}
        onFilter={jest.fn()}
      />
    );
    expect(screen.getByLabelText('genre')).not.toBeChecked();
  });

  it('method onChange should be called on click', () => {
    const onFilter = jest.fn();
    render(
      <SearchBar
        filterValue="title"
        movie=""
        onSubmit={jest.fn()}
        onSearchMovie={jest.fn()}
        onFilter={onFilter}
      />
    );
    userEvent.click(screen.getAllByRole('radio', { hidden: true })[1]);
    expect(onFilter).toHaveBeenCalled();
  });

  it('onSubmit should be called on click', () => {
    const onSubmit = jest.fn((event) => event.preventDefault());
    render(
      <SearchBar
        filterValue=""
        movie=""
        onSubmit={onSubmit}
        onSearchMovie={jest.fn()}
        onFilter={jest.fn()}
      />
    );
    userEvent.click(screen.getByText('Search'));
    expect(onSubmit).toHaveBeenCalled();
  });
});
