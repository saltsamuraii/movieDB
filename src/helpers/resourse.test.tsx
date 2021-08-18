import React from 'react';
import { loadData } from './resourсe';

jest.mock('./resourсe', () => ({
  loadData: jest.fn()
}));

describe('loadData module', () => {
  it('loaddata to have been call', () => {
    const params = {
      search: 'string',
      sortOrder: 'string',
      searchBy: 'string',
      sortBy: 'string'
    };
    expect(loadData('movies.com', params));
  });
});
