import React, { ChangeEvent, FormEvent } from 'react';
import { RadioButton } from '../radio-button';
import './search-bar.css';
import {
  SearchFormButton,
  SearchFormFilters,
  SearchFormInput,
  SearchFormLegendText,
} from './search-bar.styled';

interface SearchBarProps {
  filterValue: string;
  movie: string;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onSearchMovie: (event: ChangeEvent<HTMLInputElement>) => void;
  onFilter: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchBar({
  filterValue,
  movie,
  onSubmit,
  onSearchMovie,
  onFilter,
}: SearchBarProps) {
  return (
    <>
      <h1>Movie Finder</h1>
      <form onSubmit={onSubmit}>
        <SearchFormInput
          value={movie}
          type="text"
          placeholder="Search..."
          onChange={onSearchMovie}
        />
        <SearchFormFilters>
          <fieldset>
            <SearchFormLegendText>Search by</SearchFormLegendText>
            <RadioButton
              className="search-form__radio__button"
              value="title"
              checked={filterValue === 'title'}
              onChange={onFilter}
            />
            <RadioButton
              className="search-form__radio__button"
              value="genre"
              checked={filterValue === 'genre'}
              onChange={onFilter}
            />
          </fieldset>
          <SearchFormButton type="submit">Search</SearchFormButton>
        </SearchFormFilters>
      </form>
    </>
  );
}
