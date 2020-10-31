import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';

const Header = () => {
    return (
        <header className="myheader mb-2">
            <img src="assets/img/logogrill.png" alt="logo" className="float" id="logo-rest"></img>
        </header>
    )
}

export default Header;