import React from "react";
import { useState } from "react";
import Panel from "./Panel";

export default function DisplayButtons(props) {
  const [quitGame, setQuitGame] = useState(false);
  function DisplayButtonsProps() {
    // setQuitGame(true);
    console.log(props.start);
    if (props.start === true) {
      return (
        <div>
          <button id="guess"> Guess </button>
          <button id="quit">Quit </button>
          <button id="give-up"> I Give Up! </button>
        </div>
      );
    } else return null;
  }
  return (
    <div>
      <div> {DisplayButtonsProps()}</div>
      {/* <Panel quitGame={quitGame} /> */}
    </div>
  );
}
