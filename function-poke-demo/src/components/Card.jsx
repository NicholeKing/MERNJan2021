import React, { useState } from 'react';

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
const Card = props => {
    const [health, setHealth] = useState(props.hp);
    const [isAlive, setIsAlive] = useState(true);

    const isAttacked = () => {
        var newHP = health - 10;
        if(newHP <=0){
            setIsAlive(false);
            setHealth(0);
        } else {
            setHealth(newHP);
        }
    }
    return(
        <div>
            <img src={props.image} alt="card" style={ ImgStyle }/>
            <h3>Health: { health }</h3>
            
            {
                isAlive ? <button onClick={ isAttacked } style={ btnStyle }>Get Attacked</button> : <h3>KO'ed!</h3>
            }
            <hr/>
        </div>
    );
}

export default Card;