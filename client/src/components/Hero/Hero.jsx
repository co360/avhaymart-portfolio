import React, { Component } from 'react'
import './Hero.css'

class Hero extends Component {
    render() {
        return (
            <div id="hero">
                <img class="hero-image" src="./img/avonlea.jpg" alt="asdf" />
                <h1 class="hero-heading">Avonlea Haymart</h1>
                <p class="hero-subheading">My passion is turning ideas into reality.</p>
                <div className="social-icons">

                    {this.props.social.icons.map((item) => {
                        return (
                            <a href={item.url} target="_blank" className="icon">
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