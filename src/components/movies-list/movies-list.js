import React, {Component} from 'react';

import MovieCard from '../movie-card/movie-card';
import Results from '../results/results';

import './movies-list.css'
import SwaggerService from "../services/swagger-service";

class MoviesList extends Component {
    render() {
        return (
            <main>
                <Results/>
                <SwaggerService>
                    {/*<h2 className="results__title">No movies found</h2>*/}
                    <MovieCard/>
</SwaggerService>
            </main>
        );
    }
}

export default MoviesList;