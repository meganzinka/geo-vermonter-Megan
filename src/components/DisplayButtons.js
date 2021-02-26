import React from "react";



export default function DisplayButtons (props) {
function DisplayButtonsProps() {
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
    </div>
  );
}


