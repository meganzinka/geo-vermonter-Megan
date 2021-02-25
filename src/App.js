import "./App.css";
import { useState } from "react";
import Panel from './components/Panel'
import Nav from './components/Nav'
import Map from "./components/Map";
import GameBox from "./components/Gamebox";
import Compass from "./components/Compass"
import Score from "./components/Score"


function App() {
  const [center, setCenter] = useState([43.88, -72.7317]);

  return (
    <div>
      <Map center={center} />
      <Panel />
      <GameBox />
      <Nav />
      <Compass />
      <Score />
    </div>
  );
}

export default App;
