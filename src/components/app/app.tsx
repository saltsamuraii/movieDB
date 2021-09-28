import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, useHistory } from 'react-router-dom';
import { ErrorBoundary } from '../error-boundary';
import { SearchBar } from '../search-bar';
import './app.css';
import { MovieList } from '../movie/movie-list';
import { SearchInfo } from '../search-info';
import { MovieDetails } from '../movie/movie-details';
import { loadMovies } from '../../redux/redux-helpers/load-movies';

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
    history.push('/');
  };

  const handleMovieSelected = (id: number): void => {
    setMovieId(id);
  };

  return (
    <ErrorBoundary>
      {!movieId ? (
        <SearchBar
          filterValue={filterValue}
          movie={searchMovie}
          onSearchMovie={handleSearchMovie}
          onSubmit={handleSubmit}
          onFilter={handleFilter}
        />
      ) : (
        <Route exact path="/movie/:movieId">
          <MovieDetails onBack={handleBack} />
        </Route>
      )}
      <SearchInfo sortValue={sortValue} onSort={handleSort} />
      <MovieList onMovieSelected={handleMovieSelected} />
    </ErrorBoundary>
  );
}
