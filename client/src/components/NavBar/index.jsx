import React, { Component } from 'react';
import './index.css'

import { Link, Events, animateScroll as scroll, scrollSpy } from 'react-scroll'

class NavBar extends Component {

    componentDidMount() {

        Events.scrollEvent.register('begin', function (to, element) {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function (to, element) {
            console.log("end", arguments);
        });

        scrollSpy.update();

    }

    scrollToTop() {
        scroll.scrollToTop();
    }

    render() {
        return (
            <nav id="navbar">
                <div className="nav-right pull-right">
                    <div className="nav-links">
                        <ul>
                            <li><Link active-class="active" id="home-link" to="hero-scroll" spy={true} offset={-80} smooth={true} duration={500}>Home</Link></li>
                            <li><Link active-class="active" to="work-scroll" spy={true} offset={-60} smooth={true} duration={500}>My Work</Link></li>
                            <li><Link active-class="active" to="contact-scroll" spy={true} offset={-60} smooth={true} duration={500}>Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavBar