import React from 'react';

import MovieCard from '../movie-card/movie-card';
import Results from '../results/results';

const MoviesList = (props) => {
        return (
            <main>
                <Results/>
                <MovieCard onMovieSelected={props.onMovieSelected}/>
            </main>
        );
}

export default MoviesList;