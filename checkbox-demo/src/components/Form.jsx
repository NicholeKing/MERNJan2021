import React, { useState } from 'react'

const Form = props => {
    const [myForm, setMyForm] = useState({
        Alias: "",
        RealName: "",
        Power: "",
        Headquarters: "",
        Weakness: "",
        isHero: false,
        isDead: false
    })

    const onChangeHandler = e => {
        setMyForm({...myForm, [e.target.name]: e.target.value})
    }
    const isHeroHandler = e => {
        setMyForm({...myForm, [e.target.name]: !myForm.isHero})
    }
    const submitHandler = e => {
        e.preventDefault();
        //Add my data here
        props.newSuper(myForm);
        setMyForm({
            Alias: "",
            RealName: "",
            Power: "",
            Headquarters: "",
            Weakness: "",
            isHero: false,
            isDead: false
        })
    }
    return(
        <>
        <h1>Add your super character!</h1>
            <form onSubmit={ submitHandler }>
                <div className="form-group">
                    <label htmlFor="Alias">Alias</label>
                    <input type="text" name="Alias" className="form-control" onChange={ onChangeHandler } value={myForm.Alias}/>
                </div>
                <div className="form-group">
                    <label htmlFor="RealName">Real Name</label>
                    <input type="text" name="RealName" className="form-control" onChange={ onChangeHandler } value={myForm.RealName}/>
                </div>
                <div className="form-group">
                    <label htmlFor="Power">Power</label>
                    <input type="text" name="Power" className="form-control" onChange={ onChangeHandler } value={myForm.Power}/>
                </div>
                <div className="form-group">
                    <label htmlFor="Headquarters">Headquarters</label>
                    <input type="text" name="Headquarters" className="form-control" onChange={ onChangeHandler } value={myForm.Headquarters}/>
                </div>
                <div className="form-group">
                    <label htmlFor="Weakness">Weakness</label>
                    <input type="text" name="Weakness" className="form-control" onChange={ onChangeHandler } value={myForm.Weakness}/>
                </div>
                <div className="form-group">
                    <label htmlFor="isHero">Hero?</label>
                    <input type="checkbox" name="isHero" className="form-control" checked={myForm.isHero}onChange={isHeroHandler}/>
                </div>
                <input type="submit" value="Add" className="btn btn-primary"/>
            </form>
        </>
    );
}

export default Form;