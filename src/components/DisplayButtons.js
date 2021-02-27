import React from "react";

export default function DisplayButtons(props) {

    if (props.start === true) {

      return (
        <div>
          <button id="guess" onClick={props.Guess}> Guess </button>
          <button id="quit" >Quit </button>
          <button id="give-up" onClick={props.userGiveUp}  >I Give Up</button>
        </div> 
      );
    } else return null;
  
  return (
    <div>
    </div>
  );
}


//NEED ONCLICK EVENT FOR QUIT