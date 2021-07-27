import React, {PureComponent} from 'react';
import './movie-card.css'

class MovieCard extends PureComponent {
    render() {
        const {loading, onMovieSelected, onErrorImage, movies} = this.props

        if (loading) return <h1>Loading...</h1>
        if (!movies) return <h2>No movies found</h2>

        return (
            <ul className="movies">
                {movies.map(({id, poster_path, title, release_date, genres}) => {
                    return (
                        <li className="movie-card"
                            key={id}
                            onClick={() => onMovieSelected(id)}>
                            <img className="movie-card__poster"
                                 src={poster_path}
                                 onError={onErrorImage}
                                 alt=""
                                 role="presentation"
                            />
                            <div className="movie-card__content">
                                <h5 className="movie-card__title">{title}</h5>
                                <span className="movie-card__year">{release_date.slice(0, 4)}</span>
                            </div>
                            <p className="movie-card__genre">{genres[0]}</p>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default MovieCard;