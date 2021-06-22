import React from 'react';

import './movie-details.css'

const MovieDetails = () => {
        return (
            <div className="details__container">
                <img className="movie__poster" src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/93a96532d2d7e358655f491a4fc2602857a5bd78520f9341edc0cdcc292a95f5._RI_V_TTW_.jpg" alt="no image"/>
                <div className="details__content">
                    <span className="details__title">Four Rooms</span>
                    <span className="details__rating">6.6</span>
                    <p className="details__genre">Adventure</p>
                    <span className="details__year">2000</span>
                    <span className="details__duration">98 min</span>
                    <p className="details__description">It's Ted the Bellhop's first night on the job...and the hotel's very unusual guests are about to place him in some outrageous predicaments. It seems that this evening's room service is serving up one unbelievable happening after another. It's Ted the Bellhop's first night on the job...and the hotel's very unusual guests are about to place him in some outrageous predicaments. It seems that this evening's room service is serving up one unbelievable happening after another.</p>
                    <button className="btn btn__big-red">Return</button>
                </div>
            </div>
        );
}

export default MovieDetails;