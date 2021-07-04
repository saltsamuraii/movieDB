import React, {Component} from 'react';

import './movie-details.css'

class MovieDetails extends Component {

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
        const { movieId } = this.props;

        if (!movieId) {
            this.setState({
                movieId: null,
                movie: null
            });
            return;
        }

        fetch(`https://reactjs-cdp.herokuapp.com/movies/${movieId}`)
            .then((response) => response.json())
            .then((movie) =>{
                console.log(movie)
                this.setState({
                    movie
                });
            })
            .catch((error) => {
                console.log("Error " + error.message)
            });
    }

    handleErrorImage(e) {
       e.target.src = "https://allmovies.tube/assets/img/no-poster.png"
    };

    render() {
        if (!this.state.movie) {
            return null;
        }

        const {poster_path, title,  vote_average, genres, release_date, runtime, overview} = this.state.movie

        return (
            <div className="details__container">
                <img className="movie__poster" src={poster_path}
                     onError={this.handleErrorImage.bind(this)} alt="no image"/>

                <div className="details__content">
                    <span className="details__title">{title}</span>
                    <span className="details__rating">{vote_average}</span>
                    <p className="details__genre">{genres[0]}</p>
                    <span className="details__year">{release_date.slice(0, 4)}</span>
                    <span className="details__duration">{runtime} min</span>
                    <p className="details__description">{overview}</p>
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