import React from 'react';

import MovieCard from '../movie-card/movie-card';

const MoviesList = (props) => {
        return (
            <main>
                <MovieCard onMovieSelected={props.onMovieSelected}/>
            </main>
        );
}

export default MoviesList;