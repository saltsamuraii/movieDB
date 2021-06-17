import React from 'react';

import ErrorBoundary from '../error-boundary/errorboundry';
import Header from '../header/header';
import MoviesList from '../movies-list/movies-list';
import Footer from '../footer/footer';

import './app.css'

const App = () => {
        return (
            <ErrorBoundary>
                <Header/>
                    <MoviesList/>
                <Footer/>
            </ErrorBoundary>
        );
}

export default App;