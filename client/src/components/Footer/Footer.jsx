import React, { Component } from 'react'
import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-container">
                    <div className="footer-col">
                        <p>Copyright © 2018</p>
                    </div>

                    <div className="footer-col">
                        <a href="https://github.com/avhaymart/avhaymart-portfolio" target="_blank">Github Repo</a>
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