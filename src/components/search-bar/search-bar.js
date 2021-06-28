import React, {Component} from 'react';

import './search-bar.css'

class SearchBar extends Component {

    state = {
        isActive: false,
        title: 'Title',
        genre: 'Genre'
    }

    handleToggleFilter = (e) => {
        e.preventDefault()

        if (e.target.value === 'Title') {
            console.log('Filtered by Title')
        }
        if (e.target.value === 'Genre') {
            console.log('Filtered by Genre')
        }

        this.setState({
            isActive: !this.state.isActive,
        });
    }

    render() {
        const isActive = this.state.isActive

        return (
            <>
                <form>
                    <input
                        className="search"
                        type="text"
                        placeholder="Search..."
                        onChange={this.props.handleInput}
                    />

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
                            type="submit">
                            Search
                        </button>
                    </div>
                </form>
            </>
        );
    };
}

export default SearchBar;