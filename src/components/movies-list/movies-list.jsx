import React from 'react';
import { MovieCard } from '../movie-card';

export default function MoviesList(props) {
  const { loading, movies, onErrorImage, onMovieSelected } = props;

  if (loading) return <h1>Loading...</h1>;
  if (!movies) return <h2>No movies found</h2>;

  return (
    <ul className="movies">
      {movies.map(({ id, poster_path: poster, title, release_date: releaseDate, genres }) => (
        <li className="movie-card" key={id} data-id={id}>
          <MovieCard
            id={id}
            onMovieSelected={onMovieSelected}
            onErrorImage={onErrorImage}
            poster={poster}
            title={title}
            release={releaseDate}
            genre={genres}
          />
        </li>
      ))}
    </ul>
  );
}
