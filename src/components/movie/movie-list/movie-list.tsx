import React from 'react';
import { useSelector } from 'react-redux';
import { MovieCard } from '../movie-card';
import './movie-list.css';
import { MoviesState } from '../../../redux/store/store';

interface MoviesListProps {
  onMovieSelected: (id: number) => void;
}

export default function MovieList({ onMovieSelected }: MoviesListProps) {
  const movies = useSelector((state: MoviesState) => state.movies.data);
  const isLoading = useSelector((state: MoviesState) => state.movies.isLoading);

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
