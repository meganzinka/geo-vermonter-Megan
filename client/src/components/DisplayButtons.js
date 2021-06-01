import React from "react";

export default function DisplayButtons(props) {
  //when user gives up
  function giveUp(event) {
    //set to true so that the lat, long, location data shows up
    props.setUserGiveUp(true);
    //end game
    props.setStart(false);
    //give option to play new game
    props.setNewGame(true);
  }

  function goBack(event) {
    //bring back to initial pin
    props.setReturnToStart(true);
  }

  if (props.start) {
    //buttons for guess, quit, i give up
    return (
      <div id="display-buttons-container">
        <center>
          <button
            id="guess"
            onClick={() => {
              props.setGuess(true);
            }}
          >
            {" "}
          </button>
          <br></br>
          {/* <div id="return-container"> */}
            <button id="return-to-start" onClick={goBack}></button>
          {/* </div> */}
          <br></br>
          <button id="give-up" onClick={giveUp}></button>
        </center>
      </div>
    );
  } 
   else return null;
}
//guess and quit are started by onclicks -> set to true.
//Guess component is child of display buttons to pass thru info of click events
