import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ErrorBoundary } from '../error-boundary';
import { SearchBar } from '../search-bar';
import './app.css';
import { LoadDataParams } from '../../helpers/resourсe';
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
  const onLoadMovies = (url: string, params?: LoadDataParams) => dispatch(loadMovies(url, params));

  useEffect((): void => {
    onLoadMovies('https://reactjs-cdp.herokuapp.com/movies');
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const params = {
      sortBy: sortValue === 'release date' ? 'release_date' : 'vote_average',
      sortOrder: sortValue === 'rating' ? 'asc' : 'desc',
      search: searchMovie,
      searchBy: filterValue === 'title' ? 'title' : 'genres',
    };
    onLoadMovies('https://reactjs-cdp.herokuapp.com/movies', params);
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
        <MovieDetails movieId={movieId} onBack={handleBack} />
      )}
      <SearchInfo sortValue={sortValue} onSort={handleSort} />
      <MovieList onMovieSelected={handleMovieSelected} />
    </ErrorBoundary>
  );
}
