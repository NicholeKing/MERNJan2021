import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const Region = props => {
    const regions = [
        {name: "Kanto", offset: 0, end: 151, limit:151},
        {name: "Johto", offset: 151, end: 251, limit:100},
        {name: "Hoen", offset: 251, end: 386, limit:135},
        {name: "Sinnoh", offset: 386, end: 493, limit:107},
        {name: "Unova", offset: 493, end: 649, limit:156}
    ]
    const [selRegion, setSelRegion] = useState(regions[0])
    const [poke, setPoke] = useState(null)
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${selRegion.offset}&limit=${selRegion.limit}`)
            .then(response => {
                setPoke(response.data);
                console.log(response.data)})
            .catch(err => console.log(err))
    }, [selRegion]);
    
    return(
        <>
            <form className="row">
                <div className="col-sm-4">
                <p>Select a region</p>
                <select className="form-control" onChange={e => setSelRegion(regions[e.target.value])}>
                    <option value={0}>Kanto</option>
                    <option value={1}>Johto</option>
                    <option value={2}>Hoen</option>
                    <option value={3}>Sinnoh</option>
                    <option value={4}>Unova</option>
                </select>
                </div>
            </form>
            {
            poke ?
            <>
            <h2>Displaying all {selRegion.name} Pokemon</h2>
            {
                poke.results.map((item) => {
                    return <h3 className="card" style={{width: "22rem", display: "inline-block", padding: "10px"}}><Link to={`/pokemon/${item.name}`}>{item.name[0].toUpperCase() + item.name.slice(1)}</Link></h3>
                })
            }
            </>
            : ""
        }
        </>
    )
}

export default Region;