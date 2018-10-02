import React, { Component } from 'react';


class PageContainer extends Component {
    render(){
        return(
            <div id="page-container">
                {this.props.children}
            </div>
        )
    }
}

export default PageContainer