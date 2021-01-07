import React, { Component } from 'react';

class First extends Component {
    render(){
        return(
            <div>
                <h1>I am coming from the First Component!</h1>
                <h3>My favorite number is: { this.props.number }</h3>
                <h3>My favorite letter is: { this.props.letter }</h3>
            </div>
        );
    }
}

export default First;