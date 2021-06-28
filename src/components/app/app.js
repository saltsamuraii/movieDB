import React, {Component} from 'react';

import ErrorBoundary from '../error-boundary/errorboundry';
import MovieDetails from '../movie-details/movie-details';
import MoviesList from '../movies-list/movies-list';

import SwaggerService from '../services/swagger-service';
import SearchBar from "../search-bar/search-bar";

import './app.css'

class App extends Component {

    swaggerService = new SwaggerService()

    state = {
        selectedMovie: null,
        movieList: [],
        searchMovie: ''
    }

    handleInput = (e) => {
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
        this.swaggerService.getAllMovies()
            .then((movieList) => {
                this.setState({
                    movieList
                });
            });
    }

    render() {
        const filteredMovies = this.state.movieList.filter((movie) => {
            return movie.title.toLowerCase().includes(this.state.searchMovie.toLowerCase())
        });

        return (
            <ErrorBoundary>
                <h1>Movie Finder</h1>
                <SearchBar
                    handleInput={this.handleInput}
                />
                <MovieDetails
                    movieId={this.state.selectedMovie}
                    handleBack={this.handleBack}/>
                <MoviesList
                    movieList={filteredMovies}
                    onMovieSelected={this.onMovieSelected}/>
            </ErrorBoundary>
        );
    }
}

export default App;