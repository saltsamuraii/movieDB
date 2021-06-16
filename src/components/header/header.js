import React, { Component } from 'react';

import Logo from '../logo/logo';
import SearchBar from '../search-bar/search-bar';

import './header.css'

class Header extends Component {
    render() {
        return (
            <header className="container">
                <Logo/>
                <SearchBar/>
            </header>
        );
    }
}

export default Header;