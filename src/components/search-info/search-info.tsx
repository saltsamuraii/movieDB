import React, { ChangeEvent } from 'react';
import { useSelector } from 'react-redux';
import { moviesLength } from '../../redux/selectors/movies-selector';
import { SearchInfoContainer, SearchInfoLegendText, SearchInfoResult } from './search-info.styled';
import { RadioButton } from '../radio-button';

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
        <RadioButton
          value="release date"
          checked={sortValue === 'release date'}
          onChange={onSort}
        />
        <RadioButton value="rating" checked={sortValue === 'rating'} onChange={onSort} />
      </fieldset>
    </SearchInfoContainer>
  );
}
