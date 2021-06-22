import React, {Component} from 'react';

import './results.css'

class Results extends Component {

    state = {
        isActive: false,
        movieNumbers: 10
    }

    handleActiveFilter = (e) => {
        e.preventDefault()
        this.setState({ isActive: !this.state.isActive });
    }

    render() {
        const isActive = this.state.isActive

        return (
            <>
                <div className="result__filters">
                    <span className="result__text">{this.state.movieNumbers} movies found</span>
                    <div>
                        <span className="result__text">Sort by</span>
                        <span
                            onClick={this.handleActiveFilter}
                            className={isActive ? "result__filter" : "result__filter active"}>release date</span>
                        <span
                            onClick={this.handleActiveFilter}
                            className={isActive ? "result__filter active" : "result__filter"}>rating</span>
                    </div>
                </div>
            </>
        );
    }
}

export default Results;