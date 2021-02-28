import React from "react";
import Guess from "./Guess"
import {useState} from 'react'

//our buttons for guess, quit, i give up

export default function DisplayButtons(props) {
const [guess, setGuess] = useState(false);
const [tempWin, setTempWin] = useState(false)

    if (props.start === true) {

      return (
        <div>
          <button id="guess" onClick={() => {setGuess(true)}}> Guess </button>
          <button id="quit" >Quit </button>
          <button id="give-up" onClick={() => {props.userGiveUp(true)}}  >I Give Up</button>
        {console.log(guess)}
        <Guess location = {props.location} guess = {guess} win = {props.win} setWin={props.setWin} tempWin = {tempWin} setTempWin = {setTempWin}/>
        </div> 
        
      );
    } else return null;
}
//guess and quit are started by onclicks -> set to true.
//Guess component is child of display buttons to pass thru info of click events

