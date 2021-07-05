import React, {Component} from 'react';
import './search-bar.css'

class SearchBar extends Component {
    render() {
        const {isActive, searchMovie, handleSubmit, handleSearchMovie, handleFilter} = this.props

        return (
            <>
                <h1>Movie Finder</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        className="search-bar"
                        value={searchMovie}
                        type="text"
                        placeholder="Search..."
                        onChange={handleSearchMovie}
                    />

                    <div className="search-bar__filters">
                        <div>
                            <span className="search-bar__text">search by</span>
                            <button
                                type="button"
                                value="title"
                                onClick={handleFilter}
                                className={isActive ? "btn active" : "btn"}>
                                Title
                            </button>
                            <button
                                type="button"
                                value="genre"
                                onClick={handleFilter}
                                className={!isActive ? "btn active" : "btn"}>
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
}

export default SearchBar;