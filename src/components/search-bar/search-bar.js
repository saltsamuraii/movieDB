import React from 'react';

import './search-bar.css'

function SearchBar(props) {
    const {isActive, title, genre} = props

    return (
        <>
            <form onSubmit={props.handleSubmit}>
                <input
                    className="search"
                    type="text"
                    placeholder="Search..."
                    onChange={props.handleChange}
                />

                <div className="filters">
                    <div>
                        <span className="text">search by</span>
                        <button
                            type="button"
                            value={title}
                            onClick={props.handleFilter}
                            className={isActive ? "btn active" : "btn"}>
                            Title
                        </button>
                        <button
                            type="button"
                            value={genre}
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