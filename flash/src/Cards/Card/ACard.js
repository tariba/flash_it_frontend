import React from 'react';

export default function Card ({Atext, flipped, onClick}) {

    return (

        <div onClick = {onClick}>

            {flipped ? <p>{Atext}</p> : <p>Show Answer</p>}

        </div>
    )

}