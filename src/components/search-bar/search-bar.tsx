import React, { ChangeEvent, FormEvent } from 'react';
import {
  SearchFormButton,
  SearchFormFilters,
  SearchFormInput,
  SearchFormLegendText,
} from './search-bar.styled';
import { RadioButton } from '../radio-button';

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
            <RadioButton value="title" checked={filterValue === 'title'} onChange={onFilter} />
            <RadioButton value="genre" checked={filterValue === 'genre'} onChange={onFilter} />
          </fieldset>
          <SearchFormButton type="submit">Search</SearchFormButton>
        </SearchFormFilters>
      </form>
    </>
  );
}
