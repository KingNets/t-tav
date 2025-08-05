import React from 'react';
import './Header.css'; // Assuming you will create a separate CSS file for header styles

const Header = () => {
    return (
        <header className="header">
            <h1 className="site-title">Videography Portfolio</h1>
            <nav className="navigation">
                <ul>
                    <li><a href="#youtube">YouTube</a></li>
                    <li><a href="#instagram">Instagram</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;