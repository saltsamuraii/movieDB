import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import SearchInfo from './search-info';

describe('SearchInfo component', () => {
  it('should render movieResult text', () => {
    render(
      <SearchInfo
        movieResult='10 movies found'
        sortValue='release date'
        onSort={jest.fn()}/>
    );
    expect(screen.getByText('10 movies found')).toBeInTheDocument();
  });

  it('sortValue with release date should be defaultChecked', () => {
    render(
      <SearchInfo
        sortValue='release date'
        movieResult=''
        onSort={jest.fn()}/>
    );
    expect(screen.getByLabelText('release date')).toBeChecked();
  });

  it('rating should not to be checked by default', () => {
    render(
      <SearchInfo
        sortValue='release date'
        movieResult=''
        onSort={jest.fn()}/>
    );
    expect(screen.getByLabelText('rating')).not.toBeChecked();
  });

  it('method onSort should be called on click', () => {
    const onSort = jest.fn();
    render(
      <SearchInfo
        sortValue='release date'
        movieResult=''
        onSort={onSort}/>
    );
    userEvent.click(screen.getAllByRole('radio')[1]);
    expect(onSort).toHaveBeenCalled();
  });
});