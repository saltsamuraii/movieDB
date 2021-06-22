import React, {Component} from 'react';

import './search-bar.css'

class SearchBar extends Component {

    state = {
        isActive: false,
    }

    handleOnSearch(e) {
        e.preventDefault();
        console.log('click');
    };

    handleToggleFilter = (e) => {
        e.preventDefault()
        this.setState({ isActive: !this.state.isActive });
    }

    render() {
        const isActive = this.state.isActive

        return (
            <>
                <h1 className="title">Find your movie</h1>
                <form>
                    <input className="search" type="text" placeholder="Enter your movie"/>
                    <div className="filters">
                        <div>
                            <span className="text">search by</span>
                            <button
                                onClick={this.handleToggleFilter}
                                className={isActive ? "btn" : "btn active"}>
                                Title
                            </button>
                            <button
                                onClick={this.handleToggleFilter}
                                className={isActive ? "btn active" : "btn"}>
                                Genre
                            </button>
                        </div>
                        <button
                            className="btn btn__big-red"
                            onClick={this.handleOnSearch}>
                            Search
                        </button>
                    </div>
                </form>
            </>
        );
    };
}

export default SearchBar;