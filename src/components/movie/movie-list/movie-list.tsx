import React from 'react';
import { MovieCard } from '../movie-card';
import { Movie } from '../movie';
import './movie-list.css';

interface MoviesListProps {
  movies: Movie[];
  isLoading: boolean;
  onMovieSelected: (id: number) => void;
}

export default function MovieList({ isLoading, movies, onMovieSelected }: MoviesListProps) {
  if (isLoading) return <h1>Loading...</h1>;
  if (!movies.length) return <h2>No movies found</h2>;

  return (
    <ul className="movies">
      {movies.map((movie) => (
        <li className="movie-card" key={movie.id}>
          <MovieCard data={movie} onMovieSelected={onMovieSelected} />
        </li>
      ))}
    </ul>
  );
}
