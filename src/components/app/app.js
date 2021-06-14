import React, { Component } from 'react';

import ErrorBoundary from '../error-boundary/errorboundry';
import Header from '../header/header';
import MovieList from '../movie-list/movie-list';
import Footer from '../footer/footer';

class App extends Component {
    render() {
        return (
            <div>
                <ErrorBoundary>
                <Header/>
                <MovieList/>
                <Footer/>
                </ErrorBoundary>
            </div>
        )
    }
}

export default App;