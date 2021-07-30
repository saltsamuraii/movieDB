import React, { PureComponent } from 'react';
import './movie-card.css';

export default class MovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      imageError: true
    };

    this.handleSelected = this.handleSelected.bind(this);
    this.handleErrorImage = this.handleErrorImage.bind(this);
  }

  handleSelected() {
    const { onMovieSelected, data: { id } } = this.props;
    onMovieSelected(id);
  }

  handleErrorImage() {
    this.setState({
      imageError: false
    });
  }

  render() {
    const { imageError } = this.state;
    const {
      data:
        {
          poster_path: poster,
          release_date: releaseDate,
          title,
          genres
        }
    } = this.props;

    const imgSrc = !imageError ? 'https://allmovies.tube/assets/img/no-poster.png' : poster;

    return (
      <>
        <img
          className="movie-card__poster"
          src={imgSrc}
          onClick={this.handleSelected}
          onError={this.handleErrorImage}
          alt=""
          role="presentation"
        />
        <div className="movie-card__content">
          <h5 className="movie-card__title">{title}</h5>
          <span className="movie-card__year">{releaseDate.slice(0, 4)}</span>
        </div>
        <p className="movie-card__genre">{genres[0]}</p>
      </>
    );
  }
}
