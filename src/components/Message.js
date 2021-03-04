import React from "react";

const Message = (props) => {
    function exitMessage (event) {
        props.setDisplayMessage(false); 
    }
  if (props.displayMessage === "win") {
    return (
      <div class="message-wrapper">
        <div class="message">
          <h1> Congratulations, you won!</h1>
          <h3> Your score was a score!</h3>
          <button onClick = {props.setDisplayMessage(false)}>Exit</button>
        </div>
      </div>
    );
  } else if (props.displayMessage === "lose") {
    return (
      <div class="message-wrapper">
        <div class="message">
          <h1>Sucks to Suck!</h1>
          <h3>You lose 10 points.</h3>
          <button onClick = {exitMessage}>Exit</button>
        </div>
      </div>
    );
  } else return null 
};

export default Message;
