import React, {Component} from 'react';

import './search-bar.css'

class SearchBar extends Component {
    render() {
        return (
            <>
                <h1 className="title">Find your movie</h1>
                <form>
                    <input className="search" type="text" placeholder="Enter your movie"/>
                    <div className="filters">
                        <div>
                            <span className="text">search by</span>
                            <button className="btn active">Title</button>
                            <button className="btn">Genre</button>
                        </div>
                            <button className="btn btn__big-red">Search</button>
                    </div>
                </form>
            </>
        );
    };
}

export default SearchBar;