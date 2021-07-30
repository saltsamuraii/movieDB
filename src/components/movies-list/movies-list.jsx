import React from 'react';
import { MovieCard } from '../movie-card';

export default function MoviesList(props) {
  const { loading, movies, onMovieSelected } = props;

  if (loading) return <h1>Loading...</h1>;
  if (!movies) return <h2>No movies found</h2>;

  return (
    <ul className="movies">
      {movies.map((movie) => (
        <li className="movie-card" key={movie.id} data-id={movie.id}>
          <MovieCard data={movie} onMovieSelected={onMovieSelected}/>
        </li>
      ))}
    </ul>
  );
}
