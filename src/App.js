import "./App.css";
import { useState, useEffect } from "react";
import Panel from "./components/Panel";
import Nav from "./components/Nav";
import Map from "./components/Map";
import GameBox from "./components/Gamebox";
import Compass from "./components/Compass";
// import Directions from "./components/Compass";
import Score from "./components/Score";
import borderData from "./data/border";
import leafletPip from "leaflet-pip";
//import { map } from "leaflet";
import L from "leaflet";
import Guess from "./components/Guess";
import DisplayButtonsProps from "./components/DisplayButtons";
import GeoData from "./components/GeoData";

//store the location where the pin was dropped

let tempVariable;
// import {useMap} from 'leaflet'

function App() {
  // const [view, setView] = useState([43.88, -72.7317]);
  const [center, setCenter] = useState([43.88, -72.7317]);
  const [zoom, setZoom] = useState(8);
  const [direction, setDirection] = useState("");
  const [start, setStart] = useState(false);
  const [droppedPin, setDroppedPin] = useState("")

  let newX;
  let newY;

  function gameStart(evt) {
    let layers = 0;
    let xMin = -73.42613118833583;
    let xMax = -71.51022535353107;
    let yMin = 42.730315121762715;
    let yMax = 45.00541896831666;

    while (layers !== 1) {
      newX = xMin + Math.random() * (xMax - xMin);
      newY = yMin + Math.random() * (yMax - yMin);
      layers = leafletPip.pointInLayer(
        [newX, newY],
        L.geoJSON(borderData),
        true
      ).length;
    }
    setCenter([newY, newX]);
    setZoom(18);
    evt.target.style.display = "none";
    setStart(true);
    setDroppedPin([newY, newX]);
  }
  

  let changeDirection = (evt) => {
    setDirection(evt.target.id);
  };

  return (
    <div>
      <Compass
        droppedPin = {droppedPin}
        changeDirection={changeDirection}
        direction={direction}
      />
      <GeoData droppedPin = {droppedPin} start = {start}/>
      <DisplayButtonsProps start={start}/>
      <Map center={center} zoom={zoom} />

      {/* <GameBox /> */}
      {/* <Nav/> */}
      {/* <Directions /> */}
      <Score />
      <button id="start-button" onClick={gameStart}>
        Start
      </button>
    </div>
  )
}

export default App;
