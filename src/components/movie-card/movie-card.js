import React, { PureComponent } from 'react';
import './movie-card.css';

class MovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this.handleSelected = this.handleSelected.bind(this);
  }

  handleSelected() {
    const { onMovieSelected, id } = this.props;
    onMovieSelected(id);
  }

  render() {
    const { poster, release, title, genre, onErrorImage } = this.props;

    return (
      <>
        <img
          className="movie-card__poster"
          src={poster}
          onClick={this.handleSelected}
          onError={onErrorImage}
          alt=""
          role="presentation"
        />
        <div className="movie-card__content">
          <h5 className="movie-card__title">{title}</h5>
          <span className="movie-card__year">{release.slice(0, 4)}</span>
        </div>
        <p className="movie-card__genre">{genre[0]}</p>
      </>
    );
  }
}

export default MovieCard;
