import React from 'react'

//show the user's score 
export default function Score(props) {
    return (
        <div>
            <h2>Current Score: {props.score}</h2>
        </div>
    )
}
