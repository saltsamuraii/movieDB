import React from 'react';

import MovieCard from '../movie-card/movie-card';

const MoviesList = (props) => {
        return (
            <>
                <MovieCard
                    movieList={props.movieList}
                    onMovieSelected={props.onMovieSelected}/>
            </>
        );
}

export default MoviesList;