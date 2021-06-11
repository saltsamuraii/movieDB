import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import './index.css'

class App extends Component {
    render() {
        return (
            <div>
                <h1>Movie Finder</h1>
                <p>Title</p>
                <input type="text" placeholder="enter you text"/>
                <button>Search</button>
            </div>
        );
    };
}

ReactDOM.render(<App/>, document.getElementById('root'));