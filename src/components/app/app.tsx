import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { generatePath, Route, Switch, useHistory } from 'react-router-dom';
import { ErrorBoundary } from '../error-boundary';
import { SearchBar } from '../search-bar';
import { MovieList } from '../movie/movie-list';
import { SearchInfo } from '../search-info';
import { MovieDetails } from '../movie/movie-details';
import { loadMovies } from '../../redux/redux-helpers/load-movies';
import { PageNotFound } from '../page-not-found';
import { ROUTE } from '../../enums/enum-routes';
import { GlobalStyles } from './app.styled';

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
    history.push(generatePath(ROUTE.SEARCH, { searchMovie }));
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
      <GlobalStyles />
      <Switch>
        <Route exact path={ROUTE.HOME}>
          <SearchBar
            filterValue={filterValue}
            movie={searchMovie}
            onSearchMovie={handleSearchMovie}
            onSubmit={handleSubmit}
            onFilter={handleFilter}
          />
          <SearchInfo sortValue={sortValue} onSort={handleSort} />
          <MovieList />
        </Route>
        <Route path={ROUTE.SEARCH}>
          <SearchBar
            filterValue={filterValue}
            movie={searchMovie}
            onSearchMovie={handleSearchMovie}
            onSubmit={handleSubmit}
            onFilter={handleFilter}
          />
          <SearchInfo sortValue={sortValue} onSort={handleSort} />
          <MovieList />
        </Route>
        <Route exact path={ROUTE.MOVIE_DETAILS}>
          <MovieDetails onBack={handleBack} />
          <SearchInfo sortValue={sortValue} onSort={handleSort} />
          <MovieList />
        </Route>
        <Route component={PageNotFound} />
      </Switch>
    </ErrorBoundary>
  );
}
