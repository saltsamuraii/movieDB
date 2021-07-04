import React, {Component} from 'react';

import ErrorBoundary from '../error-boundary/errorboundry';
import MovieDetails from '../movie-details/movie-details';
import MoviesList from '../movies-list/movies-list';
import SearchBar from '../search-bar/search-bar';

import './app.css'
import Results from "../results/results";

class App extends Component {

    state = {
        movies: [],
        selectedMovie: null,
        searchMovie: '',
        isActive: true,
        isSortedActive: true,
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const {isActive, searchMovie, isSortedActive} = this.state

        fetch(`https://reactjs-cdp.herokuapp.com/movies?sortBy=${isSortedActive === true ? 'release_date' : 'vote_average'}&sortOrder=${isSortedActive === true ? 'asc' : 'desc'}&search=${searchMovie}&searchBy=${isActive === true ? 'title' : 'genres'}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Could not fetch ${response.url} status: ${response.status}`)
                }
                return response.json();

            })
            .then((result) => {
                console.log("On submit ", result)
                this.setState({
                    movies: result.data
                });
            })
            .catch((error) => {
                console.log(`Error: ${error.message}`)
            });
    }

    handleSort = (e) => {
        console.log(e.target.value)
        this.setState({
            isSortedActive: !this.state.isSortedActive
        });
    }

    handleFilterToggle = (e) => {
        console.log(e.target.value)
        this.setState({
            isActive: !this.state.isActive
        });
    }

    handleChange = (e) => {
        this.setState({
            searchMovie: e.target.value
        });
    }

    handleBack = (e) => {
        e.preventDefault()

        this.setState({
            selectedMovie: null
        });
    }

    onMovieSelected = (id) => {
        this.setState({
            selectedMovie: id
        });
    }

    componentDidMount() {

        fetch(`https://reactjs-cdp.herokuapp.com/movies`)
            .then((response) => {
                return response.json();
            })
            .then((result) => {
                console.log("Component did mount", result)
                this.setState({
                    movies: result.data
                })
            })
            .catch((error) => {
                console.log("Fetch problem" + error.message)
            })
    }

    render() {
        const {movies, searchMovie, isActive, isSortedActive, selectedMovie} = this.state

        return (
            <ErrorBoundary>
                {!selectedMovie ? (
                    <SearchBar
                        movies={movies}
                        isActive={isActive}
                        value={searchMovie}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        handleFilter={this.handleFilterToggle}
                    />
                ) : (
                    <MovieDetails
                        movieId={this.state.selectedMovie}
                        handleBack={this.handleBack}/>
                )}
                <Results
                    handleSort={this.handleSort}
                    isSortedActive={isSortedActive}
                    moviesLength={`${movies.length} movies found`}
                />
                <MoviesList
                    movies={movies}
                    onMovieSelected={this.onMovieSelected}/>
            </ErrorBoundary>
        );
    }
    ;
}

export default App;