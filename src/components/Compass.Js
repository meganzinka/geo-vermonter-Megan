import React from "react";
import { useState } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";

//compass buttons that on click/mousedown will prompt the changedirection function
const Compass = (props) => {
  const [center, setCenter] = useState(props.center);
  
  return (
    <div>
      <button
        id="north"
        onMouseDown={props.changeDirection}
      >
        North
      </button>
      <button id="east" onMouseDown={props.changeDirection}>
        East
      </button>
      <button id="south" onMouseDown={props.changeDirection}>
        South
      </button>
      <button id="west" onMouseDown={props.changeDirection}>
        West
      </button>
    </div>
  );
};

export default Compass;
