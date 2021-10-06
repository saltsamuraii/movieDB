import { Meta, Story } from '@storybook/react';
import React, { ChangeEvent, FormEvent } from 'react';
import { SearchBar } from '../components/search-bar';

interface SearchBarProps {
  filterValue: string;
  movie: string;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onSearchMovie: (event: ChangeEvent<HTMLInputElement>) => void;
  onFilter: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default {
  title: 'Components/SearchBar',
  component: SearchBar,
  argTypes: {
    backgroundColor: { description: '#fff' },
  },
} as Meta;

const Template: Story<SearchBarProps> = (args) => <SearchBar {...args} />;

export const SearchBarComponent = Template.bind(SearchBar);

SearchBarComponent.args = {
  filterValue: 'Title',
  movie: 'Search you movie...',
  onSubmit: (event: FormEvent<HTMLFormElement>) => console.log(event.target),
  onSearchMovie: (event: ChangeEvent<HTMLInputElement>) => console.log(event),
  onFilter: (event: ChangeEvent<HTMLInputElement>) => console.log(event),
};
