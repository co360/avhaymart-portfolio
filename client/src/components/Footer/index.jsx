import React, { Component } from 'react'
import './index.css'

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-container">
                    <div className="footer-col">
                        <p>Copyright © 2018</p>
                    </div>

                    <div className="footer-col">
                        <a href="https://docs.google.com/document/d/1GRKADa5G526HYQbdC_SxXbSXhCce-iSvfC_5Q5BZg94/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
                        <br />
                        <a href="https://github.com/avhaymart/avhaymart-portfolio" target="_blank" rel="noopener noreferrer">Github Repository</a>
                    </div>

                    <div className="footer-col">
                        <p>Avonlea Haymart</p>
                        <ul>
                            <li>(928)-955-2269</li>
                            <li>avhaymart@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer