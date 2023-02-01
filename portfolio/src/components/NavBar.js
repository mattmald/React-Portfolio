import React from 'react';

function NavBar({ currentPages, HandlePageChange }) {
    return (
            <ul>
                <li>
                    <a href='#AboutMe'
                        onClick={() => HandlePageChange('AboutMe')}
                        className={currentPages === 'Home' ? 'nav-link active' : 'nav-link'}
                    >
                        About Me
                    </a>
                </li>
                <li>
                    <a href='#Resume'
                        onClick={() => HandlePageChange('Resume')}
                        className={currentPages === 'Resume' ? 'nav-link active' : 'nav-link'}
                    >
                        Resume
                    </a>
                </li>
                <li>
                    <a href='#Portfolio'
                        onClick={() => HandlePageChange('Portfolio')}
                        className={currentPages === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                    >
                        Portfolio
                    </a>
                </li >
                <li>
                    <a href='#Contact'
                        onClick={() => HandlePageChange('Contact')}
                        className={currentPages === 'Contact' ? 'nav-link active' : 'nav-link'}
                    >
                        Contact
                    </a>
                </li>
            </ul>
            );
}

export default NavBar