import React, { Component } from 'react'
import './index.css'

class Hero extends Component {
    render() {
        return (
            <div id="hero">
                <img className="hero-image" src="./img/avonlea.jpg" alt="asdf" />
                <h1 className="hero-heading">Avonlea Haymart</h1>
                <p className="hero-subheading">My passion is turning ideas into reality.</p>
                <div className="social-icons">

                    {this.props.social.icons.map((item) => {
                        return (
                            <a key={item.name} href={item.url} rel="noopener noreferrer" target="_blank" className="icon">
                                <img src={item.imgUrl} alt={item.name}/>
                            </a>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Hero;