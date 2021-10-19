import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { ErrorBoundary } from '../error-boundary';
import { SearchBar } from '../search-bar';
import { MovieList } from '../movie/movie-list';
import { SearchInfo } from '../search-info';
import { loadMovies } from '../../redux/redux-helpers/load-movies';
import { ROUTE } from '../../enums/enum-routes';
import { GlobalStyles } from './app.styled';

export default function App() {
  const [searchMovie, setSearchMovie] = useState<string>('');
  const [filterValue, setFilterValue] = useState<string>('title');
  const [sortValue, setSortValue] = useState<string>('release date');
  const dispatch = useDispatch();
  const router = useRouter();

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
    router.push({ pathname: ROUTE.SEARCH, query: { searchMovie } });
  };

  const handleFilter = ({ target: { value } }: ChangeEvent<HTMLInputElement>): void => {
    setFilterValue(value);
  };

  const handleSearchMovie = ({ target: { value } }: ChangeEvent<HTMLInputElement>): void => {
    setSearchMovie(value);
  };

  const handleSort = ({ target: { value } }: ChangeEvent<HTMLInputElement>): void => {
    setSortValue(value);
  };

  return (
    <ErrorBoundary>
      <GlobalStyles />
      <SearchBar
        filterValue={filterValue}
        movie={searchMovie}
        onSearchMovie={handleSearchMovie}
        onSubmit={handleSubmit}
        onFilter={handleFilter}
      />
      <SearchInfo sortValue={sortValue} onSort={handleSort} />
      <MovieList />
    </ErrorBoundary>
  );
}
