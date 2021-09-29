import React from 'react';
import { useSelector } from 'react-redux';
import { Link, generatePath } from 'react-router-dom';
import { MovieCard } from '../movie-card';
import { MoviesState } from '../../../redux/store/store';
import './movie-list.css';
import { ROUTE } from '../../../enums/enum-routes';

export default function MovieList() {
  const movies = useSelector((state: MoviesState) => state.movies.data);
  const isLoading = useSelector((state: MoviesState) => state.movies.isLoading);

  if (isLoading) return <h1>Loading...</h1>;
  if (!movies.length) return <h2>No movies found</h2>;

  return (
    <ul className="movies">
      {movies.map((movie) => (
        <li className="movie-card" key={movie.id}>
          <Link
            className="movie-card__link"
            to={generatePath(`${ROUTE.MOVIE_DETAILS}`, { movieId: movie.id })}
          >
            <MovieCard data={movie} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
