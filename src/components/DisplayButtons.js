import React from "react";

export default function DisplayButtons(props) {

  //when user gives up
function giveUp (event) {
  //set to true so that the lat, long, location data shows up 
  props.setUserGiveUp(true)
  //end game 
  props.setStart(false)
  //give option to play new game 
  props.setNewGame(true) }

function goBack (event) {
  //bring back to initial pin 
  props.setReturnToStart(true)
}

    if (props.start) {
//buttons for guess, quit, i give up
      return (
        <div>
          <center>
          <button id="guess" onClick={() => {props.setGuess(true)}}> Guess </button>
          <br></br>
          <button id="return-to-start" onClick={goBack}>Return</button>
          <br></br>
          <button id="quit" onClick={() => window.location.reload()} >Quit </button>
          <br></br>
          <button id="give-up" onClick={giveUp}  >I Give Up</button>
          </center></div> 
      );
    } else if (props.newGame) {
      return (
        <div>
          <button onClick={() => window.location.reload()} >New Game</button>
        </div>
      )
    } else return null;
}
//guess and quit are started by onclicks -> set to true.
//Guess component is child of display buttons to pass thru info of click events

