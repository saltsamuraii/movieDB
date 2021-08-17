import React from 'react';
import userEvent from '@testing-library/user-event/dist';
import { render, screen } from '@testing-library/react';
import { SearchBar } from './index';

describe('Searchbar module', () => {
  it('should render component with correct title', () => {
    const { getByText } = render(
      <SearchBar
        filterValue=''
        movie=''
        onSubmit={jest.fn()}
        onSearchMovie={jest.fn()}
        onFilter={jest.fn()}/>
    );
    expect(getByText('Movie Finder')).toBeInTheDocument();
  });
  it('should handleSubmit on button click', () => {
    const onSubmit = jest.fn(event => event.preventDefault())
    render(
      <SearchBar
        filterValue=''
        movie=''
        onSubmit={onSubmit}
        onSearchMovie={jest.fn()}
        onFilter={jest.fn()}/>
        );
    userEvent.click(screen.getByRole('button'))
    expect(onSubmit).toHaveBeenCalled()
  });
});