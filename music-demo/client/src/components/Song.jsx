import React from 'react';
import { Link } from '@reach/router'

const Song = props => {
    return (
        <>
        <h2><Link to={`/song/update/${props.song._id}`}>{props.song.title}</Link><button onClick={() => props.removeSong(props.song._id)}>&times;</button></h2>
        <h3>Artist: {props.song.artist}</h3>
        <h4>Genre: {props.song.genre}</h4>
        <p>Length: {props.song.minutes}:{props.song.seconds}</p>
        <hr/>
        </>
    );
}

export default Song;