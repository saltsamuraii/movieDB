import React, {Component} from 'react';

import './movie-card.css'

import Results from "../results/results";

class MovieCard extends Component {

    handleErrorImage(e) {
        e.target.src = 'https://allmovies.tube/assets/img/no-poster.png'
    }

    renderItems(arr) {
        return arr.map(({id, title, cover, genre, year}) => {
            return (
                <li className="movie__card"
                    key={id}
                    onClick={() => this.props.onMovieSelected(id)}>
                    <img className="movie__poster" src={cover} onError={this.handleErrorImage} alt="no image"/>
                        <div className="movie__content">
                            <h5 className="movie__title">{title}</h5>
                            <span className="movie__year">{year}</span>
                        </div>
                            <p className="movie__genre">{genre}</p>
                </li>
            );
        });
    }

    render() {
        const { movieList } = this.props;

        if (!movieList) {
            return <p>Loading....</p>
        }

        const movies = this.renderItems(movieList);

        return (
            <ul className="movies">
                <Results movieLength={movies.length}/>
                {movies}
            </ul>
        );
    };
}

export default MovieCard;