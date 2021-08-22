import { enableFetchMocks } from 'jest-fetch-mock';
import { loadData } from './resourсe';

enableFetchMocks();

fetchMock.mockResponseOnce(JSON.stringify({ data: { url: 'url' } }));

describe('loadData module', () => {
  it('should call right url', () => {
    fetchMock.mockResponseOnce(JSON.stringify({ data: { url: 'url' } }));
    loadData('https://reactjs-cdp.herokuapp.com/movies', undefined);
    expect(fetchMock).toBeCalledWith('https://reactjs-cdp.herokuapp.com/movies');
  });
  it('url and params not to be undefined', () => {
    fetchMock.mockResponseOnce(JSON.stringify({ url: 'url' }));
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
  it('should call api', () => {
    fetchMock.mockResponseOnce(JSON.stringify({ url: 'url' }));
    loadData('https://reactjs-cdp.herokuapp.com/movies');
    expect(fetchMock).toHaveBeenCalled();
  });
  it('should show error on wrong url', () => {
    fetchMock.mockRejectOnce(new Error('wrong url'));
    loadData('https://reactjs-cdp.herokuapp.com/movies');
    expect(fetchMock).rejects.toThrow('wrong url');
  });
});