import React,{Component} from 'react';
import './WorkContainer.css'

class WorkContainer extends Component {
    render(){
        return(
            <a href={this.props.link} target="_blank" className="work-container">
                <h3>{this.props.title}</h3>
                <p>{this.props.desc}</p>
                <p>Technologies Used: {this.props.tech}</p>
            </a>
        )
    }
}

export default WorkContainer;