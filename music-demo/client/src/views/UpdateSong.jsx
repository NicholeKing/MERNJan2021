import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from '../components/Form';
import { navigate } from '@reach/router';

const UpdateSong = props => {
    const [form, setForm] = useState({
        title: "",
        artist: "",
        genre: "",
        minutes: 0,
        seconds: 0
    })

    useEffect(() => {
        axios.get(`http://localhost:8000/api/music/${props._id}`)
            .then(res => setForm(res.data.oneSong))
    }, [])

    const onChangeHandler = e => {
        setForm({
            ...form, [e.target.name]:e.target.value
        })
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/music/update/${props._id}`, form)
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

export default UpdateSong;