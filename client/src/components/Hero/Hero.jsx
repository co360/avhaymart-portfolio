import React,{Component} from 'react'
import './Hero.css'

class Hero extends Component {
    render(){
        return(
            <div class="hero">
                <img class="hero-image" src="./img/avonlea.jpg" alt="asdf"/>
                <h1 class="hero-heading">Avonlea Haymart</h1>
                <p class="hero-subheading">My passion is turning ideas into reality.</p>
                <div className="social-icons">
                    <div className="icon"></div>
                    <div className="icon"></div>
                </div>
            </div>
        )
    }
}

export default Hero;