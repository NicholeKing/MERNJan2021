import React from 'react';

const Form = props => {
    return(
        <form onSubmit={props.onSubmitHandler}>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" onChange={props.onChangeHandler} value={props.form.title}/>
            <label htmlFor="artist">Artist</label>
            <input type="text" name="artist" onChange={props.onChangeHandler} value={props.form.artist}/>
            <label htmlFor="genre">Genre</label>
            <input type="text" name="genre" onChange={props.onChangeHandler} value={props.form.genre}/>
            <label htmlFor="time">Length</label>
            <input type="number" name="minutes" onChange={props.onChangeHandler} value={props.form.minutes}/> : <input type="number" name="seconds" onChange={props.onChangeHandler} value={props.form.seconds}/>
            <input type="submit" value="Submit"/>
        </form>
    );
}

export default Form;