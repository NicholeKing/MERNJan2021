import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Pokemon = props => {
    const [pokemon, setPokemon] = useState(null)
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${props.id}`)
            .then(response => {
                setPokemon(response.data)
                console.log(response.data)
            })
            .catch(err => console.log(err))
    }, [])
    return(
        <>
        {
            pokemon ? <>
            <h1>Here is your {pokemon.name}</h1>
            <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
            <h2>Your pokemon id is: {props.id}</h2>
            </> : ""
        }
        </>
    );
}

export default Pokemon;