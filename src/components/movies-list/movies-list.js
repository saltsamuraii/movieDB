import React, {Component} from 'react';
import MovieCard from '../movie-card/movie-card';

class MoviesList extends Component {
    render() {
        const {movies, onErrorImage, onMovieSelected} = this.props

        return (
            <>
                <MovieCard
                    movies={movies}
                    onErrorImage={onErrorImage}
                    onMovieSelected={onMovieSelected}/>
            </>
        );
    }
}

export default MoviesList;