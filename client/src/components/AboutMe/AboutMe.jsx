import React,{Component} from 'react'
import './AboutMe.css'

class AboutMe extends Component {
    render(){
        return(
            <div className="about-me">
                <div>
                <h2>{this.props.title}</h2>
                <p>I'm a Full-Stack Web Developer specializing in React, JavaScript, and Node.js here in Phoenix, Arizona.  I taught myself website engineering at a young age, and made my first website when I was nine years old. I'm a Marine Corps Veteran and I enjoy working on side projects in my free time.</p>
                </div>
            </div>
        )
    }
}

export default AboutMe;