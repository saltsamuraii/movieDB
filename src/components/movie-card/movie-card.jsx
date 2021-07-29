import React, { PureComponent } from 'react';
import './movie-card.css';

export default class MovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      fallbackSrc: 'https://allmovies.tube/assets/img/no-poster.png',
      imageError: true
    }

    this.handleSelected = this.handleSelected.bind(this);
    this.handleErrorImage = this.handleErrorImage.bind(this);
  }


  handleSelected() {
    const { onMovieSelected, id } = this.props;
    onMovieSelected(id);
  }

  handleErrorImage() {
    this.setState({
      imageError: false,
      fallbackSrc: "https://allmovies.tube/assets/img/no-poster.png"
    });
  }

  render() {
    const { imageError, fallbackSrc} = this.state;
    const { poster, release, title, genre} = this.props;
    const imgSrc = !imageError ? fallbackSrc : poster

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
          <span className="movie-card__year">{release.slice(0, 4)}</span>
        </div>
        <p className="movie-card__genre">{genre[0]}</p>
      </>
    );
  }
}
