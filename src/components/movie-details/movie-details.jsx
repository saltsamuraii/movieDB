import React, { Component } from 'react';
import './movie-details.css';
import { loadData } from '../../helpers/resourse';

export default class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: null,
    };
  }

  componentDidMount() {
    this.updateMovie();
  }

  componentDidUpdate(prevProps) {
    const { movieId } = this.props
    if (movieId !== prevProps.movieId) {
      this.updateMovie();
    }
  }

  updateMovie() {
    const { movieId } = this.props;

    if (movieId === undefined) {
      this.setState({
        movie: null
      });
      return;
    }

    loadData(`https://reactjs-cdp.herokuapp.com/movies/${movieId}`).then((movie) => {
      this.setState({
        movie,
      });
    });
  }

  render() {
    const { movie } = this.state;
    const { onErrorImage, onBack } = this.props;

    if (!movie) return null;

    const {
      poster_path: poster,
      vote_average: voteAverage,
      release_date: releaseDate,
      title,
      genres,
      runtime,
      overview
    } = movie;


    return (
      <div className="movie-details__container">
        <img
          className="movie__poster"
          src={poster}
          onError={onErrorImage}
          alt=""
          role="presentation"
        />
        <div className="movie-details__content">
          <span className="movie-details__title">{title}</span>
          <span className="movie-details__rating">{voteAverage}</span>
          <p className="movie-details__genre">{genres[0]}</p>
          <span className="movie-details__year">{releaseDate.slice(0, 4)}</span>
          <span className="movie-details__duration">{runtime} min</span>
          <p className="movie-details__description">{overview}</p>
          <button type="button" className="movie-details__button" onClick={onBack}>
            Return
          </button>
        </div>
      </div>
    );
  }
}
