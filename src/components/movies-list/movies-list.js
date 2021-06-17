import React, {Component} from 'react';

import MovieCard from '../movie-card/movie-card';
import Results from '../results/results';

import './movies-list.css'

class MoviesList extends Component {
    render() {
        return (
            <main>
                <Results/>
                    <h2 className="results__title">No movies found</h2>
                    <MovieCard/>
            </main>
        );
    }
}

export default MoviesList;