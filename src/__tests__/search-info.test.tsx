import React from 'react';
import { render } from '@testing-library/react';
import SearchInfo from '../components/search-info/search-info';

test('Module SearchInfo', () => {
   render(
    <SearchInfo
    movieNumbers='30 movies found' sortValue='rating'
    onSort={event => event}/>
    );
});