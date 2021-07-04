import React, {Component} from 'react';

import './movie-card.css'

class MovieCard extends Component {

    handleErrorImage(e) {
        e.target.src = 'https://allmovies.tube/assets/img/no-poster.png'
    }

    render() {
        const movieList = this.props.movies.map(({id, poster_path, title, release_date, genres}) => {
            return (
                <li className="movie__card"
                    key={id}
                    onClick={() => this.props.onMovieSelected(id)}>
                    <img className="movie__poster" src={poster_path}  onError={this.handleErrorImage} alt="no image"/>
                    <div className="movie__content">
                        <h5 className="movie__title">{title}</h5>
                        <span className="movie__year">{release_date.slice(0, 4)}</span>
                    </div>
                    <p className="movie__genre">{genres[0]}</p>
                </li>
            );
        });

        if (!movieList) {
            return <h1>Loading...</h1>
        }

        return (
            <ul className="movies">
                {movieList}
            </ul>
        )

    }
}

export default MovieCard;