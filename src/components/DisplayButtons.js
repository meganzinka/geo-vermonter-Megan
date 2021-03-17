import React from "react";
import {useState} from "react"

export default function DisplayButtons(props) {
  //make option to start new game
  const [newGame, setNewGame] = useState()

function giveUp (event) {
  props.setUserGiveUp(true)
  props.setStart(false)
  setNewGame(true) }

    if (props.start) {
//buttons for guess, quit, i give up
      return (
        <div>
          <button id="guess" onClick={() => {props.setGuess(true)}}> Guess </button>
          <button id="quit" onClick={() => window.location.reload()} >Quit </button>
          <button id="give-up" onClick={giveUp}  >I Give Up</button>
        </div> 
      );
    } else if (newGame) {
      return (
        <div>
          <button onClick={() => window.location.reload()} >New Game</button>
        </div>
      )
    } else return null;
}
//guess and quit are started by onclicks -> set to true.
//Guess component is child of display buttons to pass thru info of click events

