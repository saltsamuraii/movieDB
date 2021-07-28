import React from 'react';
import MovieCard from '../movie-card/movie-card';

function MoviesList(props) {
    const {loading, movies, onErrorImage, onMovieSelected} = props

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

export default MoviesList;