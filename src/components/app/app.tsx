import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, useHistory } from 'react-router-dom';
import { ErrorBoundary } from '../error-boundary';
import { SearchBar } from '../search-bar';
import './app.css';
import { MovieList } from '../movie/movie-list';
import { SearchInfo } from '../search-info';
import { MovieDetails } from '../movie/movie-details';
import { loadMovies } from '../../redux/redux-helpers/load-movies';
import { PageNotFound } from '../page-not-found';
import { ROUTE } from '../../enums/enum-routes';

export default function App() {
  const [searchMovie, setSearchMovie] = useState<string>('');
  const [filterValue, setFilterValue] = useState<string>('title');
  const [sortValue, setSortValue] = useState<string>('release date');
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect((): void => {
    dispatch(loadMovies('https://reactjs-cdp.herokuapp.com/movies'));
  }, [dispatch]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const params = {
      sortBy: sortValue === 'release date' ? 'release_date' : 'vote_average',
      sortOrder: sortValue === 'rating' ? 'asc' : 'desc',
      search: searchMovie,
      searchBy: filterValue === 'title' ? 'title' : 'genres',
    };
    dispatch(loadMovies('https://reactjs-cdp.herokuapp.com/movies', params));
    history.push(`${ROUTE.SEARCH}${searchMovie}`);
  };

  const handleFilter = ({ target: { value } }: ChangeEvent<HTMLInputElement>): void => {
    setFilterValue(value);
  };

  const handleSort = ({ target: { value } }: ChangeEvent<HTMLInputElement>): void => {
    setSortValue(value);
  };

  const handleSearchMovie = ({ target: { value } }: ChangeEvent<HTMLInputElement>): void => {
    setSearchMovie(value);
  };

  const handleBack = (): void => {
    history.goBack();
  };

  return (
    <ErrorBoundary>
      <Switch>
        <Route path={ROUTE.MOVIE_DETAILS}>
          <MovieDetails onBack={handleBack} />
        </Route>
        <Route path={ROUTE.HOME}>
          <SearchBar
            filterValue={filterValue}
            movie={searchMovie}
            onSearchMovie={handleSearchMovie}
            onSubmit={handleSubmit}
            onFilter={handleFilter}
          />
        </Route>
        <Route component={PageNotFound} />
      </Switch>
      <SearchInfo sortValue={sortValue} onSort={handleSort} />
      <MovieList />
    </ErrorBoundary>
  );
}
