import React, { ChangeEvent } from 'react';
import { RadioButton } from '../radio-button';
import './search-info.css';

interface SearchInfoProps {
  movieResult: number;
  sortValue: string;
  onSort: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchInfo({ sortValue, onSort, movieResult }: SearchInfoProps) {
  return (
    <div className="search-info">
      <span className="search-info__result">
        {movieResult} movie{movieResult === 1 ? '' : 's'} found
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
