import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from '../components/Form';
import { navigate } from '@reach/router';

const AddSong = props => {
    const [form, setForm] = useState({
        title: "",
        artist: "",
        genre: "",
        minutes: 0,
        seconds: 0
    })

    const onChangeHandler = e => {
        setForm({
            ...form, [e.target.name]:e.target.value
        })
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/music/new", form)
            .then(res => {
                console.log("It worked!")
                navigate("/")
            })
            .catch(console.log("Something went wrong trying to add to the database!"))
    }
    return(
        <>
        <Form onSubmitHandler={onSubmitHandler} form={form} onChangeHandler={onChangeHandler}/>
        </>
    );
}

export default AddSong;