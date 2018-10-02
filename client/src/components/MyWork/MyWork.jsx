import React, { Component } from 'react';

import WorkContainer from '../WorkContainer';
import './MyWork.css'

class MyWork extends Component {
    render() {
        return (
            <div className="my-work">
                <h2>{this.props.title}</h2>

                {this.props.work.work.map((item) => {
                    return (
                        <WorkContainer
                            title={item.title}
                            link={item.link}
                            description={item.description}
                            tech={item.tech}
                        />
                    )
                })}
            </div>
        )
    }
}

export default MyWork