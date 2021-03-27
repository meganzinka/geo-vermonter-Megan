import React from "react";
//compass buttons that on click/mousedown will prompt the changedirection function
const Compass = (props) => {
//if the game has started, show the compass buttons
//onclick, trigger the changeDirection function in App.js 
  if (props.start) {
    return (
      <div>
        <center>
        <button id="north" onClick={props.changeDirection}>
          North
        </button>
        <br></br>
        <button id="west" onClick={props.changeDirection}>
          West
        </button>
        <button id="east" onClick={props.changeDirection}>
          East
        </button>
        <br></br>
        <button id="south" onClick={props.changeDirection}>
          South
        </button>
      </center></div>
    );
  } else return null;
};

export default Compass;
