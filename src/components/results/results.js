import React from 'react';

import './results.css'

function Results(props) {

    const {isActive, isSorted, moviesLengthTitle, moviesLengthGenre} = props

    return (
        <>
            <div className="result__filters">
                   <span className="result__text">{isActive ? moviesLengthTitle : moviesLengthGenre}</span>
                <div>
                    <span className="result__text">Sort by</span>
                    <span
                        onClick={props.handleSort}
                        className={isSorted === true ? "result__filter active" : "result__filter"}>release date
                    </span>
                    <span
                        onClick={props.handleSort}
                        className={isSorted ? "result__filter" : "result__filter active"}>rating
                    </span>
                </div>
            </div>
        </>
    );
}

export default Results;