import React from "react";
import { useState } from "react";
import Message from "./Message"

//this is guess function, seeing that selected county from dropdown menu is same as pinpointed county
export default function Guess(props) {
  const [displayMessage, setDisplayMessage] = useState(false);
  const [countyGuess, setCountyGuess] = useState(false);

//check to see if if user's guess is correct 
  function submitGuess(event) {
    console.log(props.location.county)
    if (countyGuess === props.location.county) {
      //user won the game - send this info to App so can show lat/long etc 
      props.setWin(true)
      //make setGuess false so that the popup will go away 
      props.setGuess(false);
      //set the message in the popup to be the winning message 
      setDisplayMessage("win")
      //winning has similar function to giving up - show the location data 
      props.setUserGiveUp(true)
      //make certain buttons disappear 
      props.setStart(false)
      //give option to start new game 
      props.setNewGame(true)
    } else if (countyGuess !== props.location.county) {
      //user lost the game - don't want to show lat/long/etc
      props.setWin(false)
      //make the guessing pop-up disappear 
      props.setGuess(false);
      //set the message in popup to be the losing message 
      setDisplayMessage("lose")
      //subtract 10 pints 
      props.setScore(props.score - 10)
    }
  }

  //changes the chosen county to the one that user chose 
  function chooseCounty (event) {
    setCountyGuess(event.target.value)
  }

  function closeModal (event) {
    setDisplayMessage(false)
    props.setGuess(false)
  }

  //options of counties. default is to make sure that first choice (addison) is actually selected/clicked to translate that information
  if (props.guess === true) {
    return (
      <div id="guess-county-wrapper">
        <div id="guess-county">
            <select name="county" onChange = {chooseCounty}>
              <option value="default" >Please pick a county : </option>
              <option value="Addison County">Addison County</option>
              <option value="Bennington County">Bennington County</option>
              <option value="Caledonia County">Caledonia County</option>
              <option value="Chittenden County">Chittenden County</option>
              <option value="Essex County">Essex County</option>
              <option value="Franklin County">Franklin County</option>
              <option value="Grand-Isle County">Grand Isle County</option>
              <option value="Lamoille County"> Lamoille County</option>
              <option value="Orange County"> Orange County</option>
              <option value="Orleans County"> Orleans County</option>
              <option value="Rutland County">Rutland County</option>
              <option value="Sullivan County">Sullivan County</option>
              <option value="Washington County">Washington County</option>
              <option value="Windham County"> Windham County</option>
              <option value="Windsor County"> Windsor County</option>
            </select>
            <span><center>
            <button class = "guess-button" onClick = {submitGuess}>
              Submit
            </button>
          {/* Make the message go away when user hits cancel  */}
          <button class = "guess-button" onClick={closeModal}>Cancel</button>
          </center></span></div>
      </div>
    );
      // show winning or losing message depending on submitGuess function
  } else if (!props.guess && displayMessage) {
    return (<Message score = {props.score} displayMessage = {displayMessage} setdisplayMessage = {setDisplayMessage} />);
  } else return null 
  }
