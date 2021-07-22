import React from 'react';
import './search-bar.css'

function SearchBar(props) {
    const {filterValue, movie, onSubmit, onSearchMovie, onFilter} = props

    return (
        <>
            <h1>Movie Finder</h1>
            <form onSubmit={onSubmit}>

                <input
                    className="search-bar"
                    value={movie}
                    type="text"
                    placeholder="Search..."
                    onChange={onSearchMovie}
                />

                <div className="search-bar__filters">
                    <div>
                        <span className="search-bar__filters-text">Search by</span>
                        <label className={filterValue === "title" ? "search-bar__radio-btn checked" : "search-bar__radio-btn"}>
                            <input
                                className="search-bar__filter-btn-input"
                                type="radio"
                                value="title"
                                checked={filterValue === "title"}
                                onChange={onFilter}
                            />
                            Title
                        </label>
                        <label className={filterValue === "genre" ? "search-bar__radio-btn checked" : "search-bar__radio-btn"}>
                            <input
                                className="search-bar__filter-btn-input"
                                type="radio"
                                value="genre"
                                checked={filterValue === "genre"}
                                onChange={onFilter}
                            />
                            Genre
                        </label>
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