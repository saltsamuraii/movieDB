import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { loadMovie } from '../../../redux/redux-helpers/load-movie';
import { movieResetAction } from '../../../redux/action-creators/movie-action-creators';
import { ROUTE } from '../../../enums/enum-routes';
import { getMovie } from '../../../redux/selectors/movie-selector';
import {
  MovieDetailsButton,
  MovieDetailsContainer,
  MovieDetailsContent,
  MovieDetailsDescription,
  MovieDetailsDuration,
  MovieDetailsGenre,
  MovieDetailsPoster,
  MovieDetailsRating,
  MovieDetailsTitle,
  MovieDetailsYear,
} from './movie-details.styled';

export default function MovieDetails() {
  const [imageError, setImageError] = useState(true);
  const movie = useSelector(getMovie);
  const router = useRouter();
  const { movieId } = router.query;
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

  const handleBack = (): void => {
    router.back();
  };

  useEffect(() => {
    if (!movieId) {
      router.push(ROUTE.NOT_FOUND);
    }
  }, [router, movieId]);

  if (!movie) {
    return null;
  }

  const {
    poster_path: poster,
    vote_average: voteAverage,
    release_date: releaseDate,
    title,
    genres,
    runtime,
    overview,
  } = movie;

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
        <MovieDetailsButton type="button" onClick={handleBack}>
          Return
        </MovieDetailsButton>
      </MovieDetailsContent>
    </MovieDetailsContainer>
  );
}
