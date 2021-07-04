import React from 'react';

import './search-bar.css'

function SearchBar(props) {
    const {isActive, value} = props

    return (
        <>
            <h1>Movie Finder</h1>
            <form onSubmit={props.handleSubmit.bind(this)}>
                <input
                    className="search"
                    value={value}
                    type="text"
                    placeholder="Search..."
                    onChange={props.handleChange}
                />

                <div className="filters">
                    <div>
                        <span className="text">search by</span>
                        <button
                            type="button"
                            value="title"
                            onClick={props.handleFilter}
                            className={isActive ? "btn active" : "btn"}>
                            Title
                        </button>
                        <button
                            type="button"
                            value="genre"
                            onClick={props.handleFilter}
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
}

export default SearchBar;