import React, {Component} from 'react';

import './search-bar.css'

class SearchBar extends Component {
    render() {
        const {isActive} = this.props

        return (
            <>
                <form onSubmit={this.props.handleSubmit}>
                    <input
                        className="search"
                        type="text"
                        placeholder="Search..."
                        onChange={this.props.handleChange}
                    />

                    <div className="filters">
                        <div>
                            <span className="text">search by</span>
                            <button
                                type="button"
                                value={this.props.title}
                                onClick={this.props.handleFilter}
                                className={isActive ? "btn active" : "btn"}>
                                Title
                            </button>
                            <button
                                type="button"
                                value={this.props.genre}
                                onClick={this.props.handleFilter}
                                className={isActive === false ? "btn active" : "btn"}>
                                Genre
                            </button>
                        </div>
                        <button
                            className="btn btn__big-red">
                            Search
                        </button>
                    </div>
                </form>
            </>
        );
    };
}

export default SearchBar;