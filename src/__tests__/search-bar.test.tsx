import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { SearchBar } from '../components/search-bar';

describe('Searchbar module', () => {
  it('render elements', () => {
    render(<SearchBar
      filterValue='title'
      movie='stars'
      onSubmit={event => event}
      onSearchMovie={event => event}
      onFilter={event => event}/>);
    expect(screen.getByText(/movie finder/i)).toBeInTheDocument();
  });
});