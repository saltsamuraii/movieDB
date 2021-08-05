import React from 'react';
import { MovieCard } from '../movie-card';

interface MoviesListProps {
  isLoading: boolean,
  movies: (string | number)[],
  onMovieSelected: (id: number) => void,
}

export default function MovieList({ isLoading, movies, onMovieSelected }: MoviesListProps) {

  if (isLoading) return <h1>Loading...</h1>;
  if (!movies) return <h2>No movies found</h2>;

  return (
    <ul className="movies">
      {movies.map((movie) => (
        <li className="movie-card"  key={movie.id} data-id={movie.id}>
          <MovieCard data={movie} onMovieSelected={onMovieSelected}/>
        </li>
      ))}
    </ul>
  );
}


