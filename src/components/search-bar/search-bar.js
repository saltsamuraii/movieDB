import React, {Component} from 'react';

import './search-bar.css'

class SearchBar extends Component {

    state = {
        isActive: false,
        title: 'title',
        genre: 'genre',
        search: ''
    }

    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({
            search: e.target.value
        });
    }

    handleToggleFilter = (e) => {
        e.preventDefault()
        console.log(e.target.value)

        this.setState({
            isActive: !this.state.isActive,
        });
    }

    render() {
        const isActive = this.state.isActive

        return (
            <>
                <h1 className="title">Find your movie</h1>
                <form>
                    <input
                        className="search"
                        type="text"
                        placeholder="Enter your movie"
                        value={this.state.search}
                        onChange={this.handleChange}/>

                    <div className="filters">
                        <div>
                            <span className="text">search by</span>
                            <button
                                value={this.state.title}
                                onClick={this.handleToggleFilter}
                                className={isActive ? "btn" : "btn active"}>
                                Title
                            </button>
                            <button
                                value={this.state.genre}
                                onClick={this.handleToggleFilter}
                                className={isActive ? "btn active" : "btn"}>
                                Genre
                            </button>
                        </div>
                        <button
                            className="btn btn__big-red"
                            type="submit"
                        >
                            Search
                        </button>
                    </div>
                </form>
            </>
        );
    };
}

export default SearchBar;