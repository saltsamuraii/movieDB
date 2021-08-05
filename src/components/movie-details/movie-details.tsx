import React, { Component } from 'react';
import './movie-details.css';
import { loadData } from '../../helpers/resourse';

interface MovieDetailsState {
  movie: null,
  imageError: boolean
}

interface MovieDetailsProps {
  movieId: number
  onBack: () => void
}

export default class MovieDetails extends Component<MovieDetailsProps, MovieDetailsState> {
  constructor(props: MovieDetailsProps) {
    super(props);

    this.state = {
      movie: null,
      imageError: true
    };

    this.handleErrorImage = this.handleErrorImage.bind(this);
  }

  componentDidMount(): void {
    this.updateMovie();
  }

  componentDidUpdate(prevProps: MovieDetailsProps): void {
    const { movieId } = this.props;
    if (movieId !== prevProps.movieId) {
      this.updateMovie();
    }
  }

  handleErrorImage(): void {
    this.setState({
      imageError: false
    });
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
    const { movie, imageError } = this.state;
    const { onBack } = this.props;

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


    const imgSrc = !imageError ? 'https://allmovies.tube/assets/img/no-poster.png' : poster;

    return (
      <div className="movie-details__container">
        <img
          className="movie-details__poster"
          src={imgSrc}
          onError={this.handleErrorImage}
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
