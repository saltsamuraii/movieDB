import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mocked } from 'ts-jest/utils';
import { loadData } from '../../../helpers/resourсe';
import MovieDetails from './movie-details';

jest.mock('../../../helpers/resourсe', () => ({
  loadData: jest.fn(),
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

  it('should click button onBack if MovieDetails was called', async () => {
    const onBack = jest.fn();
    render(<MovieDetails onLoadMovie={jest.fn} resetMovie={jest.fn} movieId={3} onBack={onBack} />);
    await waitFor(() => {
      userEvent.click(screen.getByText('Return'));
      expect(onBack).toHaveBeenCalled();
    });
  });

  it('MovieDetails not have been called if movieId undefined', () => {
    const { container } = render(
      <MovieDetails
        onLoadMovie={jest.fn}
        resetMovie={jest.fn}
        movieId={undefined}
        onBack={jest.fn()}
      />
    );
    expect(container).toBeEmptyDOMElement();
  });

  it('Movie poster have an errorImage backup url attribute', () => {
    render(
      <MovieDetails onLoadMovie={jest.fn} resetMovie={jest.fn} movieId={3} onBack={jest.fn()} />
    );
    waitFor(() => {
      expect(screen.getByRole('img')).toHaveAttribute(
        'src',
        'https://allmovies.tube/assets/img/no-poster.png'
      );
    });
  });
});
