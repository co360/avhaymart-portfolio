import React, { Component } from 'react';
import './index.css'

class WorkContainer extends Component {
    render() {
        return (
            <div className="work-container">
                <img src={this.props.image} alt={this.props.title} />
                <h3>{this.props.title}</h3>
                <p>{this.props.desc}</p>
                <p>Technologies Used: {this.props.tech}</p>
                <div className="link-container">
                    <a href={this.props.github} rel="noopener noreferrer" target="_blank">GitHub Repository</a>
                    <a href={this.props.deployed} rel="noopener noreferrer" target="_blank">Deployed Web App</a>
                </div>
            </div>
        )
    }
}

export default WorkContainer;