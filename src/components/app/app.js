import React, { Component } from 'react';

import ErrorBoundary from '../error-boundary/errorboundry';
import MovieDetails from '../movie-details/movie-details';
import MoviesList from '../movies-list/movies-list';


import './app.css'

import SwaggerService from '../services/swagger-service';


class App extends Component {

    swaggerService = new SwaggerService()

    state = {
        selectedMovie: null,
        searchResults: '',
    }

    handleClick = (e) => {
        e.preventDefault()
        console.log('back', this.state.selectedMovie)
        this.setState({
            selectedMovie: null
        })
    }

    onMovieSelected = (id) => {
        this.setState({
            selectedMovie: id
        });
    }

    render() {

        return (
            <ErrorBoundary>
                <MovieDetails
                    movieId={this.state.selectedMovie}
                    handleBack={this.handleClick}
                />
                <MoviesList
                    onMovieSelected={this.onMovieSelected}
                />
            </ErrorBoundary>
        );
    }
}

export default App;