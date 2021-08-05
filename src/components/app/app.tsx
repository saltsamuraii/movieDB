import React, { ChangeEvent, Component, FormEvent } from 'react';
import { ErrorBoundary } from '../error-boundary';
import { SearchBar } from '../search-bar';
import { SearchInfo } from '../search-info';
import { MoviesList } from '../movies-list';
import { MovieDetails } from '../movie-details';
import { loadData } from '../../helpers/resourse';
import './app.css';

type AppState = {
  movies: (string | number)[],
  movieId: null | number,
  searchMovie: string,
  isLoading: boolean,
  filterValue: string,
  sortValue: string,
}
type AppProps = {

}

export default class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      movies: [],
      movieId: null,
      searchMovie: '',
      isLoading: true,
      filterValue: 'title',
      sortValue: 'release date'
    };

    this.handleSearchMovie = this.handleSearchMovie.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.handleMovieSelected = this.handleMovieSelected.bind(this);
  }

  componentDidMount(): void {
    loadData('https://reactjs-cdp.herokuapp.com/movies').then((result) => {
      this.setState({
        isLoading: false,
        movies: result.data
      });
    });
  }

  handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const { filterValue, searchMovie, sortValue } = this.state;
    const params = {
      sortBy: sortValue === 'release date' ? 'release_date' : 'vote_average',
      sortOrder: sortValue === 'rating' ? 'asc' : 'desc',
      search: searchMovie,
      searchBy: filterValue === 'title' ? 'title' : 'genres'
    };

    loadData('https://reactjs-cdp.herokuapp.com/movies', params).then((result) => {
      this.setState({
        isLoading: false,
        movies: result.data
      });
    });
  }

  handleSort({ target: { value } }): void {
    this.setState({
      sortValue: value
    });
  }

  handleFilter({ target: { value } }): void {
    this.setState({
      filterValue: value
    });
  }

  handleSearchMovie({ target: { value } }): void {
    this.setState({
      searchMovie: value
    });
  }

  handleBack(): void {
    this.setState({
      movieId: null
    });
  }

  handleMovieSelected(id: number): void {
    this.setState({
      movieId: id
    });
  }

  render() {
    const { isLoading, movies, searchMovie, filterValue, sortValue, movieId } = this.state;

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
          <MovieDetails
            movieId={movieId}
            onBack={this.handleBack}
          />
        )}
        <SearchInfo
          sortValue={sortValue}
          onSort={this.handleSort}
          moviesLength={`${movies.length} movie${movies.length === 1 ? '' : 's'} found`}
        />
        <MoviesList
          isLoading={isLoading}
          movies={movies}
          onMovieSelected={this.handleMovieSelected}
        />
      </ErrorBoundary>
    );
  }
}

