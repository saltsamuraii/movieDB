import React, {Component} from 'react';
import MovieCard from '../movie-card/movie-card';

class MoviesList extends Component {


    render() {
        const {loading, movies, onErrorImage, onMovieSelected} = this.props

        if (loading) return <h1>Loading...</h1>
        if (!movies) return <h2>No movies found</h2>

        return (
            <ul className="movies">
                {movies.map(({id, poster_path, title, release_date, genres}) => (
                        <li className="movie-card"
                            key={id}
                            data-id={id}>
                            <MovieCard
                                id={id}
                                onMovieSelected={onMovieSelected}
                                onErrorImage={onErrorImage}
                                poster={poster_path}
                                title={title}
                                release={release_date}
                                genre={genres}
                            />
                        </li>
                    )
                )}
            </ul>
        );
    }
}

export default MoviesList;