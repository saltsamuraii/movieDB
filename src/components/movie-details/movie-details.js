import React, {Component} from 'react';

import './movie-details.css'
import SwaggerService from '../services/swagger-service';

class MovieDetails extends Component {

    swaggerService = new SwaggerService();

    state = {
        movie: null,
    };

    componentDidMount() {
        this.updateMovie();
    };

    componentDidUpdate(prevProps) {
        if (this.props.movieId !== prevProps.movieId) {
            this.updateMovie();
        }
    };

    updateMovie() {
        const {movieId} = this.props;

        if (!movieId) {
            this.setState({
                movieId: null,
                movie: null
            });
            return;
        }

        this.swaggerService.getMovie(movieId)
            .then((movie) => {
                this.setState({ movie });
            });
    }

    handleErrorImage(e) {
        e.target.src = 'https://allmovies.tube/assets/img/no-poster.png'
    };

    render() {
        if (!this.state.movie) {
            return null;
        }

        const {cover, title, rating, genre, year, duration, description} = this.state.movie

        return (
            <div className="details__container">
                <img className="movie__poster" src={cover}
                     onError={this.handleErrorImage} alt="no image"/>

                <div className="details__content">
                    <span className="details__title">{title}</span>
                    <span className="details__rating">{rating}</span>
                    <p className="details__genre">{genre}</p>
                    <span className="details__year">{year}</span>
                    <span className="details__duration">{duration}</span>
                    <p className="details__description">{description}</p>
                    <button
                        className="btn btn__big-red"
                        onClick={this.props.handleBack.bind(this)}>
                        Return
                    </button>
                </div>
            </div>
        );
    }
}

export default MovieDetails;