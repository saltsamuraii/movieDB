import { enableFetchMocks, ErrorOrFunction } from 'jest-fetch-mock';
import { loadData } from './resourсe';


enableFetchMocks();

fetchMock.mockResponseOnce(JSON.stringify({foo: "bar"}), {
  status: 200,
  headers: [
    ["Content-Type", "application/json"]
  ]
});

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
    expect(fetchMock).toHaveBeenCalled()
  })
  /*it('should show error on wrong url',() => {
    const errorMessage = 'oops'
    fetchMock.mockRejectOnce(new Error(errorMessage));
      expect(loadData('www.google.com')).rejects.toEqual('www.com')
  });*/
});