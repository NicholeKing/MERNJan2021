import React, { Component } from 'react';

const ImgStyle = {
    width: '200px'
}

const btnStyle = {
    width: '100px',
    height: '50px',
    backgroundColor: 'orange',
    color: 'white',
    fontSize: '15px',
    borderRadius: '10px'
}

class Card extends Component {
    constructor(props){
        super(props);
        this.state = {
            health: this.props.hp,
            isAlive: true
        }
    }
    isAttacked = () => {
        var newHealth = this.state.health - 10;
        if (newHealth <= 0){
            this.setState({health : 0, isAlive: false});
        } else {
            this.setState({health : newHealth});
        }
    }
    render(){
        const { image, hp } = this.props;
        return(
            <div>
                <img src={image} alt="card" style={ ImgStyle }/>
                <h3>Health: { this.state.health }</h3>
                {
                    this.state.isAlive ? <button onClick={ this.isAttacked } style={ btnStyle }>Get Attacked</button> : <h3>KO'ed!</h3>
                }
                <hr/>
            </div>
        );
    }
}

export default Card;