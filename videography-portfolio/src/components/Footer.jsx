import React from 'react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#282c34', color: 'white', padding: '20px', textAlign: 'center' }}>
            <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
            <div>
                <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: 'white' }}>Instagram</a>
                <a href="https://www.youtube.com/yourchannel" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: 'white' }}>YouTube</a>
            </div>
        </footer>
    );
};

export default Footer;