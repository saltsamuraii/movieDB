import React, {Component} from 'react';

import Logo from '../logo/logo';

import './footer.css'

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <Logo/>
            </footer>
        );
    }
}

export default Footer;