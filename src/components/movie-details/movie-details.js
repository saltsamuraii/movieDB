import React, {Component} from 'react';
import './movie-details.css'

class MovieDetails extends Component {
    constructor(props) {
        super(props);
    }
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

        if (movieId === undefined) {
            this.setState({
                movieId: null,
            });
            return;
        }

        fetch(`https://reactjs-cdp.herokuapp.com/movies/${movieId}`)
            .then((response) => response.json())
            .then((movie) =>{
                this.setState({
                    movie
                });
            })
            .catch((error) => {
                console.error(error + error.message)
            });
    }

    render() {
        const {movie} = this.state

        if (!movie) {
            return null;
        }

        const {poster_path, title,  vote_average, genres, release_date, runtime, overview} = movie
        const {onErrorImage, onBack} = this.props

        return (
            <div className="movie-details__container">
                <img className="movie__poster" src={poster_path}
                     onError={onErrorImage}
                     alt="no image"
                />
                <div className="movie-details__content">
                    <span className="movie-details__title">{title}</span>
                    <span className="movie-details__rating">{vote_average}</span>
                    <p className="movie-details__genre">{genres[0]}</p>
                    <span className="movie-details__year">{release_date.slice(0, 4)}</span>
                    <span className="movie-details__duration">{runtime} min</span>
                    <p className="movie-details__description">{overview}</p>
                    <button
                        className="btn btn-large"
                        onClick={onBack}>
                        Return
                    </button>
                </div>
            </div>
        );
    }
}

export default MovieDetails;