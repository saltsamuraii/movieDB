import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mocked } from 'ts-jest/utils';
import { loadData } from '../../../helpers/resourсe';
import MovieDetails from './movie-details';
import { movieLoadReducer } from '../../../redux/reducers';
import { Movie } from '../movie';

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

  let movie: Movie;
  beforeEach(() => {
    movie = {
      id: 1,
      poster_path: 'www.www.ww',
      genres: 'drama',
      vote_average: 30,
      title: 'Movie1',
      release_date: '2019',
    };
  });

  const rootReducer = combineReducers({
    movie: movieLoadReducer,
  });

  it('should click button onBack if MovieDetails was called', () => {
    const store = createStore(
      rootReducer,
      {
        movie: {
          isLoading: false,
          error: false,
          data: movie,
        },
      },
      applyMiddleware(thunk)
    );

    const onBack = jest.fn();
    render(
      <Provider store={store}>
        <MovieDetails movieId={3} onBack={onBack} />
      </Provider>
    );
    waitFor(() => {
      userEvent.click(screen.getByText('Return'));
      expect(onBack).toHaveBeenCalled();
    });
  });

  it('MovieDetails not have been called if movieId undefined', () => {
    const store = createStore(rootReducer, {
      movie: { isLoading: false, error: false, data: undefined },
    });

    const { container } = render(
      <Provider store={store}>
        <MovieDetails movieId={undefined} onBack={jest.fn()} />
      </Provider>
    );
    expect(container).toBeEmptyDOMElement();
  });

  it('Movie poster have an errorImage backup url attribute', () => {
    const store = createStore(
      rootReducer,
      {
        movie: {
          isLoading: false,
          error: false,
          data: movie,
        },
      },
      applyMiddleware(thunk)
    );

    render(
      <Provider store={store}>
        <MovieDetails movieId={3} onBack={jest.fn()} />
      </Provider>
    );
    waitFor(() => {
      expect(screen.getByRole('img')).toHaveAttribute(
        'src',
        'https://allmovies.tube/assets/img/no-poster.png'
      );
    });
  });
});
