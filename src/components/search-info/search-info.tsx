import React, { ChangeEvent } from 'react';
import { useSelector } from 'react-redux';
import { moviesLength } from '../../redux/selectors/movies-selector';
import {
  SearchInfoContainer,
  SearchInfoLegendText,
  SearchInfoRadioButton,
  SearchInfoResult,
} from './search-info.styled';

interface SearchInfoProps {
  sortValue: string;
  onSort: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchInfo({ sortValue, onSort }: SearchInfoProps) {
  const movieResult = useSelector(moviesLength);

  return (
    <SearchInfoContainer>
      <SearchInfoResult>
        {movieResult} movie{movieResult === 1 ? '' : 's'} found
      </SearchInfoResult>
      <fieldset>
        <SearchInfoLegendText>Sort by</SearchInfoLegendText>
        <SearchInfoRadioButton
          value="release date"
          checked={sortValue === 'release date'}
          onChange={onSort}
        />
        <SearchInfoRadioButton value="rating" checked={sortValue === 'rating'} onChange={onSort} />
      </fieldset>
    </SearchInfoContainer>
  );
}
