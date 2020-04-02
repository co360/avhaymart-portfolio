import React, { Component } from 'react';

import WorkContainer from '../WorkContainer';
import './index.css'

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
                                github={item.github}
                                deployed={item.deployed}
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