import React, { Component } from 'react';
import { ErrorBoundary } from '../error-boundary';
import { SearchBar } from '../search-bar';
import { SearchInfo } from '../search-info';
import { MoviesList } from '../movies-list';
import { MovieDetails } from '../movie-details';
import { loadData } from '../../helpers/resourse';
import './app.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      movieId: null,
      searchMovie: '',
      loading: true,
      filterValue: 'title',
      sortValue: 'release date',
    };

    this.handleSearch = this.handleSearchMovie.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.handleMovieSelected = this.handleMovieSelected.bind(this);
  }

  componentDidMount() {
    loadData('https://reactjs-cdp.herokuapp.com/movies').then((result) => {
      this.setState({
        loading: false,
        movies: result.data
      });
    });
  }

  handleSubmit(event) {
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
        loading: false,
        movies: result.data
      });
    });
  }

  handleSort({ target: { value } }) {
    this.setState({
      sortValue: value
    });
  }

  handleFilter({ target: { value } }) {
    this.setState({
      filterValue: value,
    });
  }

  handleSearchMovie({ target: { value } }) {
    this.setState({
      searchMovie: value
    });
  }

  handleBack() {
    this.setState({
      id: null
    });
  }

  handleMovieSelected(id) {
    this.setState({
      movieId: id
    });
  }


  render() {
    const { loading, movies, searchMovie, filterValue, sortValue, movieId } = this.state;

    return (
      <ErrorBoundary>
        {!movieId ? (
          <SearchBar
            movies={movies}
            filterValue={filterValue}
            movie={searchMovie}
            onSearchMovie={this.handleSearch}
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
          loading={loading}
          movies={movies}
          onMovieSelected={this.handleMovieSelected}
        />
      </ErrorBoundary>
    );
  }
}

