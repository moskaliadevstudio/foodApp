import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';

const Header = (props) => {
    return (
        <header className="myheader mb-2">
            <img src="assets/img/logoburguers.png" alt="logo" className="float" id="mosklogo"></img>
        </header>
    )
}

export default Header;