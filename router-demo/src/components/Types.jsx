import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const Types = props => {
    const [pokemon, setPokemon] = useState(null)
    const [type, setType] = useState("normal");
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/type/${type}`)
            .then(response => {
                setPokemon(response.data)
                console.log(response.data)
            })
            .catch(err => console.log(err))
    }, [type])
    return(
        <>
            <div className="row">
                <div className="col-sm-4">
                <p>Select a type</p>
                <select className="nes-select" onChange={e => setType(e.target.value)}>
                    <option value="normal">Normal</option>
                    <option value="fighting">Fighting</option>
                    <option value="fire">Fire</option>
                    <option value="water">Water</option>
                    <option value="grass">Grass</option>
                    <option value="electric">Electric</option>
                    <option value="psychic">Psychic</option>
                    <option value="dragon">Dragon</option>
                </select>
                </div>
            </div>
            {
                pokemon ?
                <>
                    <h2>Here are all the {pokemon.name} type Pokemon!</h2>
                    {
                        pokemon.pokemon.map((item, i) => {
                            return <h3 className="card" style={{width: "22rem", display: "inline-block", padding: "10px"}}><Link to={`/pokemon/${item.pokemon.name}`}>{item.pokemon.name[0].toUpperCase() + item.pokemon.name.slice(1)}</Link></h3>
                        })
                    }
                </>
                : ""
            }
        </>
    )
}

export default Types;