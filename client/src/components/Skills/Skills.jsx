import React, { Component } from 'react';
import './Skills.css'

class Skills extends Component {
    render() {
        return (
            <div className="skills">
                <h2>{this.props.title}</h2>

                <div className="icons">
                {this.props.icons.icons.map((icon) => {
                    return (
                        <div className="skill-container">
                            <img key={icon.name} src={icon.url} alt={icon.name} />
                        </div>
                    )
                })}
                </div>
            </div>
        )
    }
}

export default Skills;