import React, {Component} from 'react';

import './movie-card.css'

import SwaggerService from "../services/swagger-service";

class MovieCard extends Component {

    swaggerService = new SwaggerService()

    state = {
        movieList: null,
    };

    defaultImg(e) {
        e.target.src = 'https://allmovies.tube/assets/img/no-poster.png'
    }

    componentDidMount() {
        this.swaggerService
            .getAllMovies()
            .then((movieList) => {
                this.setState({
                    movieList
                });
            });
    }

    renderItems(arr) {
        return arr.map(({id, title, cover, genre, year}) => {
            return (
                <li className="movie__card" key={id}>
                    <img className="movie__poster" src={cover} onError={this.defaultImg} alt="no image"/>
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
        const {movieList} = this.state;

        if (!movieList) {
            return <h2 className="results__title">No movies found</h2>
        }

        const movies = this.renderItems(movieList)

        return (
            <ul className="movies">
                {movies}
            </ul>
        );
    }
}

export default MovieCard;