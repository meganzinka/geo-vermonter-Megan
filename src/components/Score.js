import React from 'react'
import scoreTitle from "../images/scoreTitle.png"
//show the user's score 
export default function Score(props) {
    return (
        <div>
            <img src = {scoreTitle} />
            <div id = "score-container">
            <div id = "score">
            {props.score}
            </div>
            </div>
        </div>
    )
}
