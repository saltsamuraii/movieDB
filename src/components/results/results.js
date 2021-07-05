import React, {Component} from 'react';
import './results.css'

class Results extends Component {
    render() {
        const {moviesLength, isSorted, handleSort} = this.props

        return (
            <>
                <div className="result__filters">
                    <span className="result__text">{moviesLength}</span>
                    <div>
                        <span className="result__text">Sort by</span>
                        <button
                            onClick={handleSort}
                            value="release_date"
                            className={isSorted ? "result__filter active" : "result__filter"}>release date
                        </button>
                        <button
                            onClick={handleSort}
                            value="vote_average"
                            className={!isSorted ? "result__filter active" : "result__filter"}>rating
                        </button>
                    </div>
                </div>
            </>
        );
    }
}

export default Results;