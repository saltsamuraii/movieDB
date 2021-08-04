import React from 'react';
import { RadioButton } from '../radio-button';
import './search-bar.css';

type SearchBarProps = {
  filterValue: string,
  movie: string,
  onSubmit: any,
  onSearchMovie: any,
  onFilter: any
}

export default function SearchBar(props: SearchBarProps) {
  const { filterValue, movie, onSubmit, onSearchMovie, onFilter } = props;

  return (
    <>
      <h1>Movie Finder</h1>
      <form onSubmit={onSubmit}>
        <input
          className="search-form__input"
          value={movie}
          type="text"
          placeholder="Search..."
          onChange={onSearchMovie}
        />
        <div className="search-form__filters">
          <fieldset>
            <legend className="search-form__legend-text">Search by</legend>
            <RadioButton
              className="search-form__radio__button"
              value="title"
              isChecked={filterValue === 'title'}
              onChange={onFilter}
            />
            <RadioButton
              className="search-form__radio__button"
              value="genre"
              isChecked={filterValue === 'genre'}
              onChange={onFilter}
            />
          </fieldset>
          <button type="submit"
                  className="search-form__button">
            Search
          </button>
        </div>
      </form>
    </>
  );
}
