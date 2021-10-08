import { Story } from '@storybook/react';
import React, { ChangeEvent, FormEvent } from 'react';
import { GlobalStyles } from '../components/app/app.styled';
import { SearchBar } from '../components/search-bar';

interface SearchBarProps {
  filterValue: string;
  movie: string;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onSearchMovie: (event: ChangeEvent<HTMLInputElement>) => void;
  onFilter: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default {
  component: SearchBar,
  title: 'SearchBar',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template: Story<SearchBarProps> = (args) => (
  <>
    <GlobalStyles />
    <SearchBar {...args} />
  </>
);

export const SearchBarInput = Template.bind(SearchBar);

SearchBarInput.args = {
  filterValue: 'title',
  movie: '',
  onSubmit: (event: FormEvent<HTMLFormElement>) => event,
  onSearchMovie: (event: ChangeEvent<HTMLInputElement>) => event,
  onFilter: (event: ChangeEvent<HTMLInputElement>) => event,
};
