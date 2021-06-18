import React, {Component} from 'react';

import MovieCard from '../movie-card/movie-card';
import Results from '../results/results';

class MoviesList extends Component {
    render() {
        return (
            <main>
                <Results/>
                <MovieCard/>
            </main>
        );
    }
}

export default MoviesList;