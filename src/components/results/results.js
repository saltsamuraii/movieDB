import React, {Component} from 'react';

import './results.css'

class Results extends Component {

    state = {
        isActive: true,
    }

    handleClass = (e) => {
        e.preventDefault()
        this.setState({
            isActive: !this.state.isActive
        });
    }

    render() {
        const isActive = this.state.isActive


        return (
            <>
                <div className="result__filters">
                    <span className="result__text">{this.props.moviesLength}</span>
                    <div>
                        <span className="result__text">Sort by</span>
                        <button
                            onClick={this.handleClass}
                            className={isActive ? "result__filter active" : "result__filter" }>release date</button>
                        <button
                            onClick={this.handleClass}
                            className={isActive ? "result__filter" : "result__filter active" }>rating</button>
                    </div>
                </div>
            </>
        );
    }
}

export default Results;