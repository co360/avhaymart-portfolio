import React, { Component } from 'react';

import WorkContainer from '../WorkContainer';
import './MyWork.css'

class MyWork extends Component {
    render() {
        return (
            <div id="work" className="my-work">
                <h2>{this.props.title}</h2>

                <div className="work-map">
                    {this.props.work.work.map((item) => {
                        return (
                            <WorkContainer
                                key={item.title}
                                title={item.title}
                                image={item.image}
                                link={item.link}
                                desc={item.description}
                                tech={item.tech}
                            />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default MyWork;