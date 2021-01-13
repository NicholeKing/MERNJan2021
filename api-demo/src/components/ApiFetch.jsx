import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ApiFetch = () => {
    const [joke, setJoke] = useState({})
    //Version #1 (basic fetch)
    // fetch("https://pokeapi.co/api/v2/pokemon?limit=60&offset=60")
    //     .then(response => {return response.json();
    //     }).then(response => {console.log(response);
    //     }).catch(err => {
    //         console.log(err);
    //     })

    //Version #2 (useEffect)
    // useEffect(() => {
    //     fetch("https://pokeapi.co/api/v2/pokemon?limit=60&offset=60")
    //     .then(response => response.json())
    //     .then(response => console.log(response.results))
    // }, [])

    //Version #3 (using axios)
    useEffect(() => {
        axios.get("https://geek-jokes.sameerkumar.website/api?format=json")
            .then(response => {
                console.log(response);
                setJoke(response.data)
            })
    }, [])
    return(
        <>
        <h2>Hello from the API Component!</h2>
        <h3>Open your console to see some data!</h3>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/250.png" alt=""/>
        <h3>Tell me a joke:</h3>
        <h4>{ joke.joke }</h4>
        </>
    )
}

export default ApiFetch;