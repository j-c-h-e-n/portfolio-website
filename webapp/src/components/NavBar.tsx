import React from 'react';
import '../app.css';

const NavBar = () => {
    return (
        <nav>
            <div className="navigation-bar-div">
                <menu className="navigation-bar-menu">
                    <a href="/bio">
                        <li>Bio</li>
                    </a>
                    <a href="/skills">
                        <li>Skills</li>
                    </a>
                    <a href="/experiences">
                        <li>Experiences</li>
                    </a>
                    <a href="/contact">
                        <li>Contact</li>
                    </a>    
                </menu>
            </div>
        </nav>
    )
}
export default NavBar;