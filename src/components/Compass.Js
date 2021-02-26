import React from "react";
import {useMap} from 'react-leaflet'
import L from "leaflet"
import {useState} from 'react'

const Compass = (props) => {
  const [center, setCenter] = useState(props.center)
  function moveCenter () {
    if(props.direction == "north") {
    setCenter(props.center[0] + 0.002)
    console.log(center)
    }
  }
  return (
    <div>
      <button id="north" onClick = {props.changeDirection, moveCenter()} >North</button>
      <button id="east" onClick = {props.changeDirection}>East</button>
      <button id="south" onClick = {props.changeDirection}>South</button>
      <button id="west" onClick = {props.changeDirection}>West</button>
    </div>
  );
};

export default Compass;




    // }
//     const map = useMap();
//     L.control.scale().addTo(map);
//   console.log(props.direction);