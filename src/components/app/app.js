import React, { Component } from 'react';

import ErrorBoundary from '../error-boundary/errorboundry';
import Header from '../header/header';
import MoviesList from '../movies-list/movies-list';
import Footer from '../footer/footer';

//import SwaggerService from '../services/swagger-service';

import './app.css'

class App extends Component {
    render() {
        return (
            <ErrorBoundary>
                <Header/>
                    <MoviesList/>
                <Footer/>
            </ErrorBoundary>
        )
    }
}

export default App;