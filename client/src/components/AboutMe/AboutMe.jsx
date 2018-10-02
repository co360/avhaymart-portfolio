import React,{Component} from 'react'
import './AboutMe.css'

class AboutMe extends Component {
    render(){
        return(
            <div className="about-me">
                <div className="left">
                <h2>{this.props.title}</h2>
                <p>I made my first website when I was <span className="bold">9 years old</span>. I taught myself website design and development at a young age. To pursue a career in this skill set, I studied at <span className="bold">University of Arizona</span> under the hand of talented and up-to-date developers. Now I'm a <span className="bold">Full-Stack Web Developer</span>.</p>

                </div>

                <div className="right">
                     <img className="about-logo" src="./img/uofa.png" alt=""/>
                </div>
            </div>
        )
    }
}

export default AboutMe;