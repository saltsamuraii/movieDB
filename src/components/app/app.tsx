import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { ErrorBoundary } from '../error-boundary';
import { SearchBar } from '../search-bar';
import './app.css';
import { LoadDataParams } from '../../helpers/resourсe';
import { MovieDetailsContainer } from '../movie/movie-details/movie-details.container';
import { SearchInfoContainer } from '../search-info/search-info.container';
import { MovieList } from '../movie/movie-list';

interface AppProps {
  onLoadMovies: (url: string, params?: LoadDataParams) => void;
}

const url = 'https://reactjs-cdp.herokuapp.com/movies';

export default function App({ onLoadMovies }: AppProps) {
  const [movieId, setMovieId] = useState<number | undefined>(undefined);
  const [searchMovie, setSearchMovie] = useState<string>('');
  const [filterValue, setFilterValue] = useState<string>('title');
  const [sortValue, setSortValue] = useState<string>('release date');

  useEffect((): void => {
    onLoadMovies(url);
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const params = {
      sortBy: sortValue === 'release date' ? 'release_date' : 'vote_average',
      sortOrder: sortValue === 'rating' ? 'asc' : 'desc',
      search: searchMovie,
      searchBy: filterValue === 'title' ? 'title' : 'genres',
    };
    onLoadMovies(url, params);
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
        <MovieDetailsContainer movieId={movieId} onBack={handleBack} />
      )}
      <SearchInfoContainer sortValue={sortValue} onSort={handleSort} />
      <MovieList onMovieSelected={handleMovieSelected} />
    </ErrorBoundary>
  );
}
