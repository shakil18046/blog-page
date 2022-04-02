import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"
const Header = () => {
    return (
        <nav className='header-menu'>
            <div className='logo-wrapper'>
                <h1>logo</h1>
            </div>
            <div className='menu'>
                <Link to="/">home</Link>
                <Link to="/video">video</Link>
                <Link to="/login">login</Link>
            </div>
        </nav>
    );
};

export default Header;