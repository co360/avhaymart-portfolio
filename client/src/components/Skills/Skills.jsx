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
                        <img src={icon.url} alt="" />
                    )
                })}
                </div>
            </div>
        )
    }
}

export default Skills;