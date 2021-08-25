import { disableFetchMocks, enableFetchMocks } from 'jest-fetch-mock';
import { loadData } from './resourсe';

beforeEach(() => {
  enableFetchMocks();
  fetchMock.mockResponseOnce(JSON.stringify({ movie: 'Movie1' }));
});

afterEach(() => {
  disableFetchMocks();
});

describe('loadData module', () => {
  it('should call right url', () => {
    loadData('https://reactjs-cdp.herokuapp.com/movies', undefined);
    expect(fetchMock).toBeCalledWith('https://reactjs-cdp.herokuapp.com/movies');
  });
  it('url and params not to be undefined', () => {
    loadData('https://reactjs-cdp.herokuapp.com/movies', {
      search: 'string',
      sortOrder: 'string',
      searchBy: 'string',
      sortBy: 'string'
    });
    expect(fetchMock).toBeCalledWith(
      'https://reactjs-cdp.herokuapp.com/movies?search=string&sortOrder=string&searchBy=string&sortBy=string'
    );
  });
  it('should show error on wrong url', () => {
    fetchMock.mockRejectOnce(new Error('wrong url'));
    loadData('https://reactjs-cdp.herokuapp.com/movies');
    expect(fetchMock).rejects.toThrow('wrong url');
  });

  it('calls url and returns data to me', () => {
    loadData('https://reactjs-cdp.herokuapp.com/movies').then(result => {
      expect(result.movie).toEqual('Movie1');
    });
  });
});