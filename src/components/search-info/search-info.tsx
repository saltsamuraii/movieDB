import React, { ChangeEvent } from 'react';
import { RadioButton } from '../radio-button';
import './search-info.css';

interface SearchInfoProps {
  movies: number;
  sortValue: string;
  onSort: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchInfo({ sortValue, onSort, movies }: SearchInfoProps) {
  return (
    <div className="search-info">
      <span className="search-info__result">
        {movies} movie{movies === 1 ? '' : 's'} found
      </span>
      <fieldset>
        <legend className="search-info__legend-text">Sort by</legend>
        <RadioButton
          className="search-info__radio__button"
          value="release date"
          checked={sortValue === 'release date'}
          onChange={onSort}
        />
        <RadioButton
          className="search-info__radio__button"
          value="rating"
          checked={sortValue === 'rating'}
          onChange={onSort}
        />
      </fieldset>
    </div>
  );
}
