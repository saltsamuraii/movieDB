import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
import { loadMovie } from '../../../redux/redux-helpers/load-movie';
import { movieResetAction } from '../../../redux/action-creators/movie-action-creators';
import { ROUTE } from '../../../enums/enum-routes';
import { getMovie } from '../../../redux/selectors/movie-selector';
import {
  MovieDetailsContainer,
  MovieDetailsPoster,
  MovieDetailsContent,
  MovieDetailsTitle,
  MovieDetailsRating,
  MovieDetailsGenre,
  MovieDetailsYear,
  MovieDetailsDuration,
  MovieDetailsDescription,
  MovieDetailsButton,
} from './movie-details.styled';

interface MovieId {
  movieId?: string;
}

interface MovieDetailsProps {
  onBack: () => void;
}

export default function MovieDetails({ onBack }: MovieDetailsProps) {
  const [imageError, setImageError] = useState(true);
  const movie = useSelector(getMovie);
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
    <MovieDetailsContainer>
      <MovieDetailsPoster src={imgSrc} onError={handleErrorImage} alt="" role="presentation" />

      <MovieDetailsContent>
        <MovieDetailsTitle>{title}</MovieDetailsTitle>
        <MovieDetailsRating>{voteAverage}</MovieDetailsRating>
        <MovieDetailsGenre>{genres[0]}</MovieDetailsGenre>
        <MovieDetailsYear>{releaseDate.slice(0, 4)}</MovieDetailsYear>
        <MovieDetailsDuration>{runtime} min</MovieDetailsDuration>
        <MovieDetailsDescription>{overview}</MovieDetailsDescription>
        <MovieDetailsButton type="button" onClick={onBack}>
          Return
        </MovieDetailsButton>
      </MovieDetailsContent>
    </MovieDetailsContainer>
  );
}
