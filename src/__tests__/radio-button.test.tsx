import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from '../components/app';
import { SearchBar } from '../components/search-bar';


describe('App', () => {
  it('renders App component', () => {
    render(<SearchBar filterValue="title" movie='star wars' onSubmit={event => event} onSearchMovie={event => event} onFilter={event => event}/>);
    screen.debug();
    expect(screen.getByText("Search by")).toBeInTheDocument();
  });
});