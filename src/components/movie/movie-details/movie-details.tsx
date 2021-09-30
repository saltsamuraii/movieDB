import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
import './movie-details.css';
import { MoviesState } from '../../../redux/store/store';
import { loadMovie } from '../../../redux/redux-helpers/load-movie';
import { movieResetAction } from '../../../redux/action-creators/movie-action-creators';
import { ROUTE } from '../../../enums/enum-routes';

interface MovieId {
  movieId?: string;
}

interface MovieDetailsProps {
  onBack: () => void;
}

export default function MovieDetails({ onBack }: MovieDetailsProps) {
  const [imageError, setImageError] = useState(true);
  const movie = useSelector(({ movie: { data } }: MoviesState) => data);
  const { movieId } = useParams<MovieId>();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMovie(`https://reactjs-cdp.herokuapp.com/movies/${movieId}`));
  }, [movieId, dispatch]);

  useEffect(
    () => () => {
      dispatch(movieResetAction());
    },
    [dispatch]
  );

  const handleErrorImage = (): void => {
    setImageError(false);
  };

  if (!movie) {
    return null;
  }

  const {
    id,
    poster_path: poster,
    vote_average: voteAverage,
    release_date: releaseDate,
    title,
    genres,
    runtime,
    overview,
  } = movie;

  if (!id) {
    return <Redirect to={ROUTE.NOT_FOUND} />;
  }

  const imgSrc = !imageError ? 'https://allmovies.tube/assets/img/no-poster.png' : poster;

  return (
    <div className="movie-details__container">
      <img
        className="movie-details__poster"
        src={imgSrc}
        onError={handleErrorImage}
        alt=""
        role="presentation"
      />
      <div className="movie-details__content">
        <span className="movie-details__title">{title}</span>
        <span className="movie-details__rating">{voteAverage}</span>
        <p className="movie-details__genre">{genres[0]}</p>
        <span className="movie-details__year">{releaseDate.slice(0, 4)}</span>
        <span className="movie-details__duration">{runtime} min</span>
        <p className="movie-details__description">{overview}</p>
        <button type="button" className="movie-details__button" onClick={onBack}>
          Return
        </button>
      </div>
    </div>
  );
}
