import React, {Component} from 'react';

import './results.css'

class Results extends Component {
    render() {
        return (
            <>
                <div className="result__filters">
                    <span className="result__text">0 movies found</span>
                    <div>
                        <span className="result__text">Sort by</span>
                        <span className="result__text result__text-date active">release date</span>
                        <span className="result__text result__text-rating">rating</span>
                    </div>
                </div>
            </>
        );
    }
}

export default Results;