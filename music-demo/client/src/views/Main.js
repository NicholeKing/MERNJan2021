import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Song from '../components/Song';

const Main = props => {
    const [music, setMusic] = useState(null);
    const [update, setUpdate] = useState(false)
    useEffect(() => {
        axios.get("http://localhost:8000/api/music")
            .then(res => setMusic(res.data.allMusic))
    }, [update])
    const removeSong = _id => {
        axios.delete(`http://localhost:8000/api/music/delete/${_id}`)
            .then(res => setUpdate(!update))
            .catch(err => console.log(err))
    }
    return(
        <>
        <h1>Here are all the objects in Main</h1>
        {
            music ? 
            music.map((m, i) => {
                return <Song song={m} key={i} removeSong={removeSong}/>
            }) : ""
        }
        </>
    );
}

export default Main;