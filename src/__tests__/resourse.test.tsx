import React from 'react';
import { render } from '@testing-library/react';
import { loadData } from '../helpers/resourse';

test('Module', () => {
  it ('render data from resourse', async () => {
    render(
      await loadData('https://reactjs-cdp.herokuapp.com/movies')
    );
  })
});