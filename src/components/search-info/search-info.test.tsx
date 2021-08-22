import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchInfo from './search-info';

describe('SearchInfo component', () => {
  it('should render movieNumbers text', () => {
    render(<SearchInfo movieNumbers='10 movies found' sortValue='release date' onSort={jest.fn()}/>);
    expect(screen.getByText('10 movies found')).toBeInTheDocument();
  });
});