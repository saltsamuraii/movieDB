import React, {Component} from 'react';
import MovieCard from '../movie-card/movie-card';

class MoviesList extends Component {
    render() {
        const {loading, movies, onErrorImage, onMovieSelected} = this.props

        return (
                <MovieCard
                    loading={loading}
                    movies={movies}
                    onErrorImage={onErrorImage}
                    onMovieSelected={onMovieSelected}/>
        );
    }
}

export default MoviesList;