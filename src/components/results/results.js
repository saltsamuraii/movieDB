import React, {Component} from 'react';

import './results.css'

class Results extends Component {

    state = {
        isActive: true,
    }

    handleClass = (e) => {
        e.preventDefault()
        this.setState({isActive: !this.state.isActive});
    }

    render() {
        const isActive = this.state.isActive

        return (
            <>
                <div className="result__filters">
                    <span className="result__text">{this.props.movieLength} movies found</span>
                    <div>
                        <span className="result__text">Sort by</span>
                        <span
                            onClick={this.handleClass}
                            className={isActive ? "result__filter active" : "result__filter" }>release date</span>
                        <span
                            onClick={this.handleClass}
                            className={isActive ? "result__filter" : "result__filter active" }>rating</span>
                    </div>
                </div>
            </>
        );
    }
}

export default Results;