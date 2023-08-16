import React from 'react';

const NavBar = () => {
    return (
        <nav>
            <div>
                <ul>
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
                </ul>
            </div>
        </nav>
    )
}
export default NavBar;