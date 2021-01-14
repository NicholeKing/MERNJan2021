import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const Pokemon = props => {
    const [pokemon, setPokemon] = useState(null)
    const [num, setNum] = useState(1);
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${props.id}`)
            .then(response => {
                setPokemon(response.data)
                console.log(response.data)
            })
            .catch(err => console.log(err))
    }, [props])

    const fetchHandler = e => {
        e.preventDefault();
        navigate(`/pokemon/${num}`)
    }
    return(
        <>
        {
            pokemon ? <>
            <h1>Here is your {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h1>
            <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
            <h2>Your pokemon id is: {props.id}</h2>
            </> : ""
        }
        <hr/>
        <form onSubmit={fetchHandler}>
            <div className="form-group col-sm-4">
                <label htmlFor="Number">Pick a Pokemon Number</label>
                <small>Number must be between 1 and 898</small>
                <input type="number" name="Number" className="nes-input" onChange={ e => setNum(e.target.value) }/>
                <button type="submit" class="nes-btn is-primary">Fetch</button>
            </div>
        </form>
        </>
    );
}

export default Pokemon;