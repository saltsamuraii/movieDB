import fetchMock from 'jest-fetch-mock';
import { loadData } from './resourсe';

fetchMock.enableMocks();

describe('loadData module', () => {
  it('', () => {
    fetchMock.mockResponseOnce(JSON.stringify({ object: { url: 'https://reactjs-cdp.herokuapp.com/movies' } }));
    //const object = loadData('https://reactjs-cdp.herokuapp.com/movies', undefined);
    const requestUrl = `https://reactjs-cdp.herokuapp.com/movies`;

    //expect(fetch).toHaveBeenCalledWith(requestUrl);
    expect(fetch).toHaveBeenCalled();
    //expect(fetch).toEqual(requestUrl);
  });
});