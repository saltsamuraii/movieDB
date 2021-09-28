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

export default function App() {
  const [movieId, setMovieId] = useState<number | undefined>(undefined);
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
    history.push(`/search/${searchMovie}`);
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
    setMovieId(undefined);
    history.goBack();
  };

  const handleMovieSelected = (id: number): void => {
    setMovieId(id);
  };

  return (
    <ErrorBoundary>
      <Switch>
        {/* AppPage */}
        <Route exact path="/">
          <SearchBar
            filterValue={filterValue}
            movie={searchMovie}
            onSearchMovie={handleSearchMovie}
            onSubmit={handleSubmit}
            onFilter={handleFilter}
          />
          <SearchInfo sortValue={sortValue} onSort={handleSort} />
          <MovieList onMovieSelected={handleMovieSelected} />
        </Route>
        {/* MovieSearchPage */}
        <Route path="/search/">
          <SearchBar
            filterValue={filterValue}
            movie={searchMovie}
            onSearchMovie={handleSearchMovie}
            onSubmit={handleSubmit}
            onFilter={handleFilter}
          />
          <SearchInfo sortValue={sortValue} onSort={handleSort} />
          <MovieList onMovieSelected={handleMovieSelected} />
        </Route>
        {/* MovieDetailsPage */}
        <Route path="/movie/:movieId">
          <MovieDetails movieId={movieId} onBack={handleBack} />
          <SearchInfo sortValue={sortValue} onSort={handleSort} />
          <MovieList onMovieSelected={handleMovieSelected} />
        </Route>
        <Route component={PageNotFound} />
      </Switch>
    </ErrorBoundary>
  );
}
