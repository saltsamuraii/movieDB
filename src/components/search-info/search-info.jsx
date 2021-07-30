import React from 'react';
import { RadioButton } from '../radio-button';
import './search-info.css';

export default function SearchInfo(props) {
  const { moviesLength, sortValue, onSort } = props;

  return (
    <div className="search-info">
      <span className="search-info__result">{moviesLength}</span>
      <fieldset>
        <legend className="search-info__legend-text">Sort by</legend>
        <RadioButton
          className="search-info__radio__button"
          value="release date"
          isChecked={sortValue === 'release date'}
          onChange={onSort}
        />
        <RadioButton
          className="search-info__radio__button"
          value="rating"
          isChecked={sortValue === 'rating'}
          onChange={onSort}
        />
      </fieldset>
    </div>
  );
}