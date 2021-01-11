import React, { useState } from 'react'

const Results = props => {
    return(
        <>
            <h1>Here are all the supers</h1>
            {
                props.allSupers.map((supe) => {
                    return <div>
                        <h3>Alias: {supe.Alias}</h3>
                        <h3>Real Name: {supe.RealName}</h3>
                        <h3>Power: {supe.Power}</h3>
                        <h3>Headquarters: {supe.Headquarters}</h3>
                        <h3>Weakness: {supe.Weakness}</h3>
                        <hr/>
                    </div>
                })
            }
        </>
    );
}

export default Results;