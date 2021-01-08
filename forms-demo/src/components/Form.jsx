import React, { useState } from 'react';

const Form = (props) => {
    const [gameName, setGameName] = useState("");
    const [genre, setGenre] = useState("");
    const [system, setSystem] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);

    const [formResults, setFormResults] = useState({});

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setFormResults({
            gName: gameName,
            gen: genre,
            sys: system,
            descr: description,
            cost: price
        });
    }

    //Validations!
    const nameValid = (gn) => {
        if(gn.length >= 3 || gn.length == 0){
            return true;
        } 
        return false;
    }

    return(
        <>
            <h2 className="jumbotron">Here is a form</h2>
            <div className="row">
                <div className="col-sm-1"></div>
                <div className="col-sm-5">
                    <h3>Submit your game idea!</h3>
                    <form onSubmit= { onSubmitHandler }>
                        <div className="form-group">
                            <label htmlFor="gameName">Name</label>
                            <input type="text" className="form-control" onChange={(e) => setGameName(e.target.value)}/>
                            {!nameValid(gameName) ? <p class="alert alert-danger">Name must be at least 3 characters!</p> : ""}
                        </div>
                        <div className="form-group">
                            <label htmlFor="gameGenre">Genre</label>
                            <input type="text" className="form-control" onChange={(e) => setGenre(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="system">System</label>
                            <input type="text" className="form-control" onChange={(e) => setSystem(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <input type="text" className="form-control" onChange={(e) => setDescription(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">Price</label>
                            <input type="decimal" className="form-control" onChange={(e) => setPrice(e.target.value)}/>
                        </div>
                        <input type="submit" value="Add" className="btn btn-primary"/>
                    </form>
                </div>
                <div className="col-sm-6">
                    <h3>Last game idea submitted</h3>
                    <h4>Game Name: {formResults.gName} </h4>
                    <h4>Game Genre: {formResults.gen}</h4>
                    <h4>Game System: {formResults.sys}</h4>
                    <h4>Game Description: {formResults.descr}</h4>
                    <h4>Game Price: ${formResults.cost}</h4>
                </div>
            </div>
            <br/>
        </>
    );
}

export default Form;