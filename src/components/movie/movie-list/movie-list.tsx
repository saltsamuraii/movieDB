import React from 'react';
import { useSelector } from 'react-redux';
import { generatePath } from 'react-router-dom';
import { MovieCard } from '../movie-card';
import { ROUTE } from '../../../enums/enum-routes';
import { getMovies, loading } from '../../../redux/selectors/movies-selector';
import { Movies, MovieCardList, MovieCardLink } from './movie-list.styled';

export default function MovieList() {
  const movies = useSelector(getMovies);
  const isLoading = useSelector(loading);

  if (isLoading) return <h1>Loading...</h1>;
  if (!movies.length) return <h2>No movies found</h2>;

  return (
    <Movies>
      {movies.map((movie) => (
        <MovieCardList key={movie.id}>
          <MovieCardLink to={generatePath(ROUTE.MOVIE_DETAILS, { movieId: movie.id })}>
            <MovieCard data={movie} />
          </MovieCardLink>
        </MovieCardList>
      ))}
    </Movies>
  );
}
