import React from "react";
// import {useMap} from 'react-leaflet'
// import L from "leaflet"
import { useState } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";


const Compass = (props) => {
  const [center, setCenter] = useState(props.center);
  console.log(props.direction);

  function moveCenter() {
    if (props.direction === "north") {
      setCenter([props.center[0] + 0.002, props.center[1]]);
    }
  }

  // const map = useMap();
  // L.control.scale().addTo(map);
  // map.setView(center, props.zoom);
  return (
    <div>
      <button
        id="north"
        onMouseDown={props.changeDirection}
        onMouseUp={moveCenter}
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

// }
//     const map = useMap();
//     L.control.scale().addTo(map);
//   console.log(props.direction);
