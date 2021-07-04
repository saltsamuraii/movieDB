import React from 'react';

import MovieCard from '../movie-card/movie-card';

const MoviesList = (props) => {
        return (
            <>
                <MovieCard
                    movies={props.movies}
                    onMovieSelected={props.onMovieSelected}/>
            </>
        );
}

export default MoviesList;