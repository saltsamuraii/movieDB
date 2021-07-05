import React, {Component} from 'react';
import './movie-card.css'

class MovieCard extends Component {
    render() {
        const {onMovieSelected, handleErrorImage} = this.props

        const movieList = this.props.movies.map(({id, poster_path, title, release_date, genres}) => {
            return (
                <li className="movie__card"
                    key={id}
                    onClick={onMovieSelected.bind(this, id)}>
                    <img className="movie-card__poster"
                         src={poster_path}
                         onError={handleErrorImage}
                         alt="no image"
                    />
                    <div className="movie-card__content">
                        <h5 className="movie__title">{title}</h5>
                        <span className="movie__year">{release_date.slice(0, 4)}</span>
                    </div>
                    <p className="movie__genre">{genres[0]}</p>
                </li>
            );
        });

        return (
            <ul className="movies">
                {movieList}
            </ul>
        )

    }
}

export default MovieCard;