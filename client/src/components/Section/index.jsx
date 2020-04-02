import React, { Component } from 'react';
import './index.css'

class Section extends Component {
    render() {
        return (
            <div className="section" style={this.props.odd ? {backgroundColor:'#f4f4f4'} : {backgroundColor:'#ffffff'}}>
                {this.props.children}
            </div>
        )
    }
}

export default Section;