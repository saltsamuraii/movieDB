import React from 'react';
import './search-bar.css'

function SearchBar(props) {
    const {isActive, searchMovie, onSubmit, onSearchMovie, onFilter} = props

    return (
        <>
            <h1>Movie Finder</h1>
            <form onSubmit={onSubmit}>
                <input
                    className="search-bar"
                    value={searchMovie}
                    type="text"
                    placeholder="Search..."
                    onChange={onSearchMovie}
                />

                <div className="search-bar__filters">
                    <div>
                        <span className="search-bar__text">search by</span>
                        <button
                            type="button"
                            value="title"
                            onClick={onFilter}
                            className={isActive ? "btn active" : "btn"}>
                            Title
                        </button>
                        <button
                            type="button"
                            value="genre"
                            onClick={onFilter}
                            className={!isActive ? "btn active" : "btn"}>
                            Genre
                        </button>
                    </div>
                    <button
                        className="btn btn-large">
                        Search
                    </button>
                </div>
            </form>
        </>
    );
}

export default SearchBar;