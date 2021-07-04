import React from 'react';

import './results.css'

function Results(props) {

    const {moviesLength, isSortedActive} = props

    return (
        <>
            <div className="result__filters">
                   <span className="result__text">{moviesLength}</span>
                <div>
                    <span className="result__text">Sort by</span>
                    <button
                        onClick={props.handleSort}
                        value="release_date"
                        className={ isSortedActive ? "result__filter active" : "result__filter"}>release date
                    </button>
                    <button
                        onClick={props.handleSort}
                        value="vote_average"
                        className={ isSortedActive === false ? "result__filter active" : "result__filter"}>rating
                    </button>
                </div>
            </div>
        </>
    );
}

export default Results;