import React from 'react';

import MovieCard from '../movie-card/movie-card';
import Results from '../results/results';

function MoviesList() {
        return (
            <main>
                <Results/>
                <MovieCard/>
            </main>
        );
}

export default MoviesList;