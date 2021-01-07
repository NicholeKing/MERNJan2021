import React, { Component } from 'react';

class Frame extends Component {
    render(){
        return(
            <>
            <h2>I am at the top of the document</h2>
            { this.props.children }
            <h2>I am at the bottom of the document</h2>
            </>
        );
    }
}

export default Frame;