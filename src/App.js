import "./App.css";
import { useState } from "react";
import Panel from "./components/Panel";
import Nav from "./components/Nav";
import Map from "./components/Map";
import GameBox from "./components/Gamebox";
import Directions from "./components/Compass";
import Score from "./components/Score";


import borderData from './data/border';
import leafletPip from 'leaflet-pip';
import L from "leaflet";

let startButton = getElementById("start-button")
function App() {
 
  const [center, setCenter] = useState([43.88, -72.7317]);
  const [zoom, setZoom] = useState(8)
  
  return (
    <div>
      <Map center={center} />
      <Panel />
      <GameBox />
      <Nav />
      <Directions />
      <Score />
             <button
             id = "start-button"
        onClick = { (evt) => {
          let layers = 0;
          let xMin = -73.42613118833583;
          let xMax = -71.51022535353107;
          let yMin = 42.730315121762715;
          let yMax = 45.00541896831666;
          let newX;
          let newY; 
          while (layers !== 1) {
          newX = xMin + Math.random() * (xMax - xMin);
          newY = yMin + Math.random() * (yMax - yMin);
          layers = (leafletPip.pointInLayer([newX, newY], L.geoJSON(borderData), true)).length
          }
          setCenter([newY, newX]);
          startButton.style.display = none
          
        }}>
      
        Click Here
      </button>
    </div>
  );
}


export default App;
