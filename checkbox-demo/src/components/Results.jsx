import React, { useState } from 'react'

const Results = props => {
    const heroColor = {
        backgroundColor: "mediumseagreen"
    }
    const villainColor = {
      backgroundColor: "red"  
    } 

    const isDeadHandler = e => {
        props.died(e.target.value)
    }
    return(
        <>
            <h1>Here are all the supers</h1>
            <table className="table table-bordered">
                <tr>
                    <th>Alias</th>
                    <th>Real Name</th>
                    <th>Power</th>
                    <th>Headquarters</th>
                    <th>Weakness</th>
                    <th>Is Hero?</th>
                    <th>Is dead?</th>
                </tr>
            
            {
                props.allSupers.map((supe, k) => {
                    return <>
                        <tr style={ supe.isHero? heroColor : villainColor}>
                            <td>{supe.Alias} {supe.isDead ? <span>&#128128;</span> : ""}</td>
                            <td>{supe.RealName}</td>
                            <td>{supe.Power}</td>
                            <td>{supe.Headquarters}</td>
                            <td>{supe.Weakness}</td>
                            <td>{supe.isHero ? "Yes" : "No"}</td>
                            <td><input type="checkbox" name="isDead" onChange={ isDeadHandler } value={k} checked={supe.isDead}/></td>
                        </tr>
                        </>
                })
            }
            </table>
        </>
    );
}

export default Results;