import React, {Component} from 'react';
import MovieCard from '../movie-card/movie-card';

class MoviesList extends Component {
    render() {
        const {movies, handleErrorImage, onMovieSelected} = this.props

        return (
            <>
                <MovieCard
                    movies={movies}
                    handleErrorImage={handleErrorImage}
                    onMovieSelected={onMovieSelected}/>
            </>
        );
    }
}

export default MoviesList;