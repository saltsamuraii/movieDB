import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event/dist';
import { mocked } from 'ts-jest/utils';
import { loadData } from '../../../helpers/resourсe';
import MovieDetails from './movie-details';

jest.mock('../../../helpers/resourсe', () => ({
  loadData: jest.fn()
}));

describe('Movie-details component', () => {
  it('should return null when Return button clicked', () => {
    const onBack = jest.fn();
    const mockedLoadData = mocked(loadData);
    mockedLoadData.mockImplementation(() => Promise.resolve({
      id: 1,
      poster_path: 'www.fake0',
      release_date: 'dd',
      vote_average: 3,
      title: 'string',
      genres: 'string',
      runtime: 3,
      overview: 'string'
    }));
    render(<MovieDetails movieId={3} onBack={onBack}/>);
    waitFor(() => {
      userEvent.click(screen.getByText('Return'));
      expect(onBack).toHaveBeenCalled();
    });
  });
});