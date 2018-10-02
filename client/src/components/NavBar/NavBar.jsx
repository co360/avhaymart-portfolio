import React, { Component } from 'react';
import './NavBar.css'

class NavBar extends Component {
    render() {
        return (
            <nav id="navbar">
                <div className="nav-right pull-right">
                    <div className="nav-links">
                        <ul>
                            <li><a id="home-link" href="#hero">Home</a></li>
                            <li><a href="#work">My Work</a></li>
                            <li><a>Contact</a></li>
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