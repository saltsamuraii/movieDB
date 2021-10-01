import React, { useState } from 'react';
import './movie-card.css';
import { Movie } from '../movie';

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
      <img
        className="movie-card__poster"
        src={imgSrc}
        onError={handleErrorImage}
        alt=""
        role="presentation"
      />
      <div className="movie-card__content">
        <h5 className="movie-card__title">{title}</h5>
        <span className="movie-card__year">{releaseDate.slice(0, 4)}</span>
      </div>
      <p className="movie-card__genre">{genres[0]}</p>
    </>
  );
}
