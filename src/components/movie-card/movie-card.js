import React, {Component} from 'react';

import './movie-card.css'
import SwaggerService from "../services/swagger-service";

class MovieCard extends Component {

    swaggerService = new SwaggerService()

    state = {
        movieList: null
    };

    componentDidMount() {
        this.swaggerService
            .getAllMovies()
            .then((movieList)=> {
                this.setState({
                    movieList
                });
            });
    }

    renderItems(arr) {
        return arr.map(({ id, title, cover, genre, year}) => {
            return (
                <div key={id}>
                    <img className="movie__poster" src={cover} alt=""/>
                    <p>{title}</p>
                    <p>{genre}</p>
                    <span>{year}</span>
                </div>
            );
        });
    }

    render() {

        const { movieList } = this.state;

        if (!movieList) {
            return <h2 className="results__title">No movies found</h2>
        }

        const movies = this.renderItems(movieList)

        return (
            <ul className="movie-cards">
                {movies}
            </ul>
        );
    }
}

export default MovieCard;