import React, {Component} from 'react';
import ErrorBoundary from '../error-boundary/error-boundary';
import SearchBar from '../search-bar/search-bar';
import Results from '../results/results';
import MoviesList from '../movies-list/movies-list';
import MovieDetails from '../movie-details/movie-details';
import './app.css'
import {loadData} from "../../helpers/resourse";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            selectedMovie: null,
            searchMovie: '',
            loading: true,
            filterValue: 'title',
            sortValue: 'release',
        }

        this.handleSearch = this.handleSearchMovie.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
        this.handleErrorImage = this.handleErrorImage.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.handleSort = this.handleSort.bind(this);
        this.handleMovieSelected = this.handleMovieSelected.bind(this);
    }

    componentDidMount() {
        loadData("https://reactjs-cdp.herokuapp.com/movies")
            .then((result) => {
                this.setState({
                    loading: false,
                    movies: result.data,
                })
            })
    };

    handleSubmit(event) {
        event.preventDefault()
        const {filterValue, searchMovie, sortValue} = this.state
        const params = {
            sortBy: sortValue === 'release_date' ? 'release_date' : 'vote_average',
            sortOrder: sortValue === 'rating' ? 'asc' : 'desc',
            search: searchMovie,
            searchBy: filterValue === 'title' ? 'title' : 'genres'
        }

        loadData("https://reactjs-cdp.herokuapp.com/movies", params)
            .then((result) => {
                console.log(params)
                this.setState({
                    loading: false,
                    movies: result.data,
                })
            })
    };

    handleSort({target: {value}}) {
        this.setState(({
            sortValue: value
        }));
    };

    handleFilter({target: {value}}) {
        this.setState(({
            filterValue: value
        }));
    };

    handleSearchMovie({target: {value}}) {
        this.setState({
            searchMovie: value
        });
    };

    handleBack() {
        this.setState({
            selectedMovie: null
        });
    };

    handleMovieSelected(id) {
        this.setState({
            selectedMovie: id
        });
    };

    handleErrorImage(event) {
        event.target.src = 'https://allmovies.tube/assets/img/no-poster.png'
    };

    render() {
        const {loading, movies, searchMovie, filterValue, sortValue, selectedMovie} = this.state

        return (
            <ErrorBoundary>
                {!selectedMovie ? (
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
                        movieId={selectedMovie}
                        onErrorImage={this.handleErrorImage}
                        onBack={this.handleBack}/>
                )}
                <Results
                    sortValue={sortValue}
                    onSort={this.handleSort}
                    moviesLength={movies.length > 1 ? `${movies.length} movies found` : `${movies.length} movie found`}
                />
                <MoviesList
                    loading={loading}
                    movies={movies}
                    onMovieSelected={this.handleMovieSelected}
                    onErrorImage={this.handleErrorImage}
                />
            </ErrorBoundary>
        );
    };
}

export default App;