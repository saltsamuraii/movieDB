import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { SearchBar } from './index';

describe('Searchbar module', () => {
  it('', () => {
    render(<SearchBar
      filterValue='title'
      movie='stars'
      onSubmit={event => event}
      onSearchMovie={event => event}
      onFilter={event => event}/>);
    expect(screen.getByText('Movie Finder')).toBeInTheDocument();
  });
});