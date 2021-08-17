import React from 'react';
import { render } from '@testing-library/react';
import { SearchBar } from './index';

describe('Searchbar module', () => {
  it('should render component with correct title', () => {
   const { getByText } = render(
      <SearchBar
      filterValue='title'
      movie='stars'
      onSubmit={jest.fn()}
      onSearchMovie={jest.fn()}
      onFilter={jest.fn()}/>
      );
    expect(getByText('Movie Finder')).toBeInTheDocument();
  });
});