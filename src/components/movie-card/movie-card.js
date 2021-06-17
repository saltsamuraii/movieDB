import React, {Component} from 'react';

import './movie-card.css'

class MovieCard extends Component {
    render() {
        return (
            <div className="movie-cards">
                <img className="movie__poster" src="https://i.pinimg.com/736x/0c/1a/0b/0c1a0bbcafcd5d6401d20f7769772a27.jpg" alt="movie-poster"/>
                <p>Title</p>
                <p>Genre</p>
                <span>Year</span>
            </div>
        );
    }
}

export default MovieCard;