import React, { Component } from 'react';

import ErrorBoundary from '../error-boundary/errorboundry';
import Header from '../header/header';
import MoviesList from '../movies-list/movies-list';
import Footer from '../footer/footer';

import './app.css'
import MovieDetails from '../movie-details/movie-details';

class App extends Component {

    state = {
        selectedMovie: null
    }

    onMovieSelected = (id) => {
        this.setState({
            selectedMovie: id
        });
    }

    render() {
        return (
            <ErrorBoundary>
                <Header/>
                <MovieDetails movieId={this.state.selectedMovie}/>
                <MoviesList onMovieSelected={this.onMovieSelected}/>
                <Footer/>
            </ErrorBoundary>
        );
    }
}

export default App;