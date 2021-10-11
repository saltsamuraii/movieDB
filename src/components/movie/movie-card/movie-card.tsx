import React, { useState } from 'react';
import { Movie } from '../movie';
import {
  MovieCardContent,
  MovieCardGenre,
  MovieCardPoster,
  MovieCardTitle,
  MovieCardYear,
} from './movie-card.styled';

interface MovieCardProps {
  data: Movie;
}

export default function MovieCard({
  data: { poster_path: poster, release_date: releaseDate, title, genres },
}: MovieCardProps) {
  const [imageError, setImageError] = useState(true);

  const handleErrorImage = (): void => {
    setImageError(false);
  };

  const imgSrc = !imageError ? 'https://allmovies.tube/assets/img/no-poster.png' : poster;

  return (
    <>
      <MovieCardPoster src={imgSrc} onError={handleErrorImage} alt="" role="presentation" />
      <MovieCardContent>
        <MovieCardTitle>{title}</MovieCardTitle>
        <MovieCardYear>{releaseDate.slice(0, 4)}</MovieCardYear>
      </MovieCardContent>
      <MovieCardGenre>{genres[0]}</MovieCardGenre>
    </>
  );
}
