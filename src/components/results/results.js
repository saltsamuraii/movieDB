import React, {Component} from 'react';
import './results.css'

class Results extends Component {
    render() {
        const {moviesLength, sortValue, onSort} = this.props

        return (
                <div className="result__filters">
                    <span className="result__text">{moviesLength}</span>
                    <div>
                        <span className="result__text">Sort by</span>
                        <label className={sortValue === "release" ? "result__filter checked" : "result__filter"}>
                            <input
                                className="result__filter-btn-input"
                                type="radio"
                                value="release"
                                checked={sortValue === "release"}
                                onChange={onSort}
                            />
                            release date
                        </label>
                        <label className={sortValue === "rating" ? "result__filter checked" : "result__filter"}>
                            <input
                                className="result__filter-btn-input"
                                type="radio"
                                value="rating"
                                checked={sortValue === "rating"}
                                onChange={onSort}
                            />
                            rating
                        </label>
                    </div>
                </div>
        );
    }
}

export default Results;