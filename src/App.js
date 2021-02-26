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

//store the location where the pin was dropped

let droppedPin;
// import {useMap} from 'leaflet'

function App() {
  // const [view, setView] = useState([43.88, -72.7317]);
  const [center, setCenter] = useState([43.88, -72.7317]);
  const [zoom, setZoom] = useState(8);
  const [direction, setDirection] = useState("");
  const [start, setStart] = useState(false);
  const [county, setCounty] = useState("");
  const [data, setData] = useState("");
  //const use state w/display

  let newX;
  let newY;

  useEffect(() => {
    if (data) {
      console.log("this is in the use effect if (data) ")
      return false;
    }
    else if (start === true) {
      console.log("this is in the use effect if (!data) ")
      fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=43.88&lon=-72.7317`, {method: "GET"}
      ).then(
        (res) => res.json()).then((jsonObj) => {
          setData(jsonObj);
          console.log(data);
          console.log(jsonObj)
          console.log("this is in the use effect if (data) ")
        })
    }
  });

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
    droppedPin = [newY, newX];
    evt.target.style.display = "none";
    setStart(true);
  }
  

  let changeDirection = (evt) => {
    setDirection(evt.target.id);
  };

  return (
    <div>
      <Compass
        center={center}
        changeDirection={changeDirection}
        direction={direction}
      />
      <Map center={center} zoom={zoom} />
      <DisplayButtonsProps start={start} />
      <Panel start={start} />
      {/* <GameBox /> */}
      {/* <Nav/> */}
      {/* <Directions /> */}
      <Score />
      <button id="start-button" onClick={gameStart}>
        Start
      </button>
    </div>
  );
}

export default App;
