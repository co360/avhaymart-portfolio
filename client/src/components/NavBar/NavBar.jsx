import React, { Component } from 'react';
import './NavBar.css'

class NavBar extends Component {
    render() {
        return (
            <nav id="navbar">
                <div className="nav-right pull-right">
                    <div className="nav-links">
                        <ul>
                            <li>Home</li>
                            <li>My Work</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="selector">
                        <div className="selector-bar"></div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavBar