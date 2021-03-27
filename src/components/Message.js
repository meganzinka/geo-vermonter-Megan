import React from "react";
import {useState} from "react"

const Message = (props) => {
  //use hidden/setHidden to show/display the message 
const [hidden, setHidden] = useState(false)
  if (props.displayMessage === "win") {
    //show winning message, score, exit button 
    return (
      <div class="message-wrapper" style ={hidden? {display: 'none'} : {display: 'flex'}}>
        <div class="message">
          <h1> Congratulations, you won!</h1>
          <h3> Your was score was: {props.score}!</h3>
          <button onClick = {function () {
            setHidden(true)
          }}>Exit</button>
        </div>
      </div>
    );
  } else if (props.displayMessage === "lose") {
    //show losing message, score, exit button 
    return (
      <div class="message-wrapper" style ={hidden? {display: 'none'} : {display: 'flex'}}>
        <div class="message">
          <center>
          <h1>Bummer! That's not correct.</h1>
          <h3>You lose 10 points.</h3>
          <h3> Current Score: {props.score}</h3>
          <button onClick = {function () {
            setHidden(true)
          }}>Exit</button>
        </center></div>
      </div>
    );
  } else return null 
};

export default Message;
