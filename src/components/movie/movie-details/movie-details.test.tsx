import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mocked } from 'ts-jest/utils';
import { loadData } from '../../../helpers/resourсe';
import MovieDetails from './movie-details';
import { renderWithStore } from '../../../helpers/test-utils';

jest.mock('../../../helpers/resourсe', () => ({
  loadData: jest.fn(),
}));

jest.mock('next/router', () => ({
  useRouter: () => ({
    query: { movieId: 'Movie1' },
    back: jest.fn(),
  }),
}));

describe('MovieDetails component', () => {
  const mockedLoadData = mocked(loadData);
  mockedLoadData.mockImplementation(() =>
    Promise.resolve({
      id: 1,
      poster_path: 'www.fake0',
      release_date: 'dd',
      vote_average: 3,
      title: 'string',
      genres: 'string',
      runtime: 3,
      overview: 'string',
    })
  );

  it('should click button onBack if MovieDetails was called', () => {
    const onBack = jest.fn();
    renderWithStore(<MovieDetails />);
    waitFor(() => {
      userEvent.click(screen.getByText('Return'));
      expect(onBack).toHaveBeenCalled();
    });
  });

  it('MovieDetails not have been called if movieId undefined', () => {
    const { container } = renderWithStore(<MovieDetails />);
    expect(container).toBeEmptyDOMElement();
  });

  it('Movie poster have an errorImage backup url attribute', () => {
    renderWithStore(<MovieDetails />);
    waitFor(() => {
      expect(screen.getByRole('img')).toHaveAttribute(
        'src',
        'https://allmovies.tube/assets/img/no-poster.png'
      );
    });
  });
});
