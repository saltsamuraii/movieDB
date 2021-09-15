import React, { ChangeEvent, Component, FormEvent } from 'react';
import { ErrorBoundary } from '../error-boundary';
import { SearchBar } from '../search-bar';
import './app.css';
import { LoadDataParams } from '../../helpers/resourсe';
import { MovieListContainer } from '../movie/movie-list/movie-list.container';
import { MovieDetailsContainer } from '../movie/movie-details/movie-details.container';
import { SearchInfoContainer } from '../search-info/search-info.container';

interface AppState {
  movieId?: number;
  searchMovie: string;
  filterValue: string;
  sortValue: string;
}

interface AppProps {
  onLoadMovies: (url: string, params?: LoadDataParams) => void;
}

const url = 'https://reactjs-cdp.herokuapp.com/movies';

export default class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      movieId: undefined,
      searchMovie: '',
      filterValue: 'title',
      sortValue: 'release date',
    };

    this.handleSearchMovie = this.handleSearchMovie.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.handleMovieSelected = this.handleMovieSelected.bind(this);
  }

  componentDidMount(): void {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.onLoadMovies(url);
  }

  handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const { filterValue, searchMovie, sortValue } = this.state;

    const params = {
      sortBy: sortValue === 'release date' ? 'release_date' : 'vote_average',
      sortOrder: sortValue === 'rating' ? 'asc' : 'desc',
      search: searchMovie,
      searchBy: filterValue === 'title' ? 'title' : 'genres',
    };

    // eslint-disable-next-line react/destructuring-assignment
    this.props.onLoadMovies(url, params);
  }

  handleSort({ target: { value } }: ChangeEvent<HTMLInputElement>): void {
    this.setState({
      sortValue: value,
    });
  }

  handleFilter({ target: { value } }: ChangeEvent<HTMLInputElement>): void {
    this.setState({
      filterValue: value,
    });
  }

  handleSearchMovie({ target: { value } }: ChangeEvent<HTMLInputElement>): void {
    this.setState({
      searchMovie: value,
    });
  }

  handleBack(): void {
    this.setState({
      movieId: undefined,
    });
  }

  handleMovieSelected(id: number): void {
    this.setState({
      movieId: id,
    });
  }

  render() {
    const { searchMovie, filterValue, sortValue, movieId } = this.state;

    return (
      <ErrorBoundary>
        {!movieId ? (
          <SearchBar
            filterValue={filterValue}
            movie={searchMovie}
            onSearchMovie={this.handleSearchMovie}
            onSubmit={this.handleSubmit}
            onFilter={this.handleFilter}
          />
        ) : (
          <MovieDetailsContainer movieId={movieId} onBack={this.handleBack} />
        )}
        <SearchInfoContainer sortValue={sortValue} onSort={this.handleSort} />
        <MovieListContainer onMovieSelected={this.handleMovieSelected} />
      </ErrorBoundary>
    );
  }
}
