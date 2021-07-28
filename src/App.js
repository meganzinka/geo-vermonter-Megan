import "./style/App.css";
import { useState } from "react";
import Map from "./components/Map";
import GeoData from "./components/GeoData";
import Compass from "./components/Compass";
import Score from "./components/Score";
import borderData from "./data/border";
import leafletPip from "leaflet-pip";
import L from "leaflet";
import DisplayButtons from "./components/DisplayButtons";
import Panel from "./components/Panel";
import Guess from "./components/Guess";
import logo from "./images/LOGO.png";

function App() {
  //starting center location, use setSenter to change center based on random point, N E S W directionals
  const [center, setCenter] = useState([43.88, -72.7317]);
  //starting zoom
  const [zoom, setZoom] = useState(8);
  //use start to signify when the game has been started
  const [start, setStart] = useState(false);
  //droppedPin is random location in VT
  const [droppedPin, setDroppedPin] = useState("");
  //use userGiveUp to signify if the user clicks this button and ends game
  const [userGiveUp, setUserGiveUp] = useState(false);
  //location object to store county and town of dropped pin
  const [location, setLocation] = useState({ county: "", town: "" });
  //newGame to pop up after a game has been won or ended
  const [newGame, setNewGame] = useState();
  //store status of winning
  const [win, setWin] = useState(false);
  //guess state to store if user would like to make a guess or not
  const [guess, setGuess] = useState(false);
  //bring back user to original dropped pin if they used directionals
  const [returnToStart, setReturnToStart] = useState(false);
  //score
  const [score, setScore] = useState(100);
  //old center stored to draw Polyline from point to point
  const [oldCenter, setOldCenter] = useState();
  //declare newX and newY to find new center
  let newX;
  let newY;

  //choose random lat and long and check and see if it's without hte bounds
  function gameStart(evt) {
    //layers = length of array where valid lat,long point is added
    let layers = 0;
    let xMin = -73.42613118833583;
    let xMax = -71.51022535353107;
    let yMin = 42.730315121762715;
    let yMax = 45.00541896831666;

    //use while loop to keep looping through until there is a point in VT
    while (layers !== 1) {
      //choose random lat and long within bounds
      newX = xMin + Math.random() * (xMax - xMin);
      newY = yMin + Math.random() * (yMax - yMin);
      //if new point is within VT, it will be added to array, array will have length of 1, so will exit loop
      layers = leafletPip.pointInLayer(
        [newX, newY],
        L.geoJSON(borderData),
        true
      ).length;
    }
    //change center to the valid lat and long values
    setCenter([newY, newX]);
    //make start button go away
    evt.target.style.display = "none";
    //start game = true
    setStart(true);
    //zoom in
    setZoom(18);
    //store the new location in dropped pin
    setDroppedPin([newY, newX]);
  }
  //changing direction
  let changeDirection = (evt) => {
    if (evt.target.id === "north") {
      setOldCenter(center);
      setCenter([center[0] + 0.002, center[1]]);
      setScore(score - 1);
    }
    if (evt.target.id === "east") {
      setOldCenter(center);
      setCenter([center[0], center[1] + 0.002]);
      setScore(score - 1);
    }
    if (evt.target.id === "south") {
      setOldCenter(center);
      setCenter([center[0] - 0.002, center[1]]);
      setScore(score - 1);
    }

    if (evt.target.id === "west") {
      setOldCenter(center);
      setCenter([center[0], center[1] - 0.002]);
      setScore(score - 1);
    }
  };

  if (returnToStart) {
    setCenter(droppedPin);
    setReturnToStart(false);
  }

  return (
    <div id="App-wrapper">
      <header id="header">
      <div id="game-logo"><img id="game-logo" src = {logo} /></div>
      </header>
      <div id="map">
        <Map
          center={center}
          zoom={zoom}
          droppedPin={droppedPin}
          returnToStart={returnToStart}
          oldCenter={oldCenter}
        />
      </div>
      <div >
        <DisplayButtons
          droppedPin={droppedPin}
          start={start}
          setStart={setStart}
          setUserGiveUp={setUserGiveUp}
          location={location}
          setWin={setWin}
          win={win}
          setGuess={setGuess}
          guess={guess}
          newGame={newGame}
          setNewGame={setNewGame}
          setReturnToStart={setReturnToStart}
        />
      </div>
      <div id="compass-container">
        <Compass
          id="compass"
          droppedPin={droppedPin}
          center={center}
          changeDirection={changeDirection}
          start={start}
        />
      </div>
      <GeoData
        start={start}
        droppedPin={droppedPin}
        userGiveUp={userGiveUp}
        setLocation={setLocation}
        location={location}
        win={win}
      />
      <Guess
        location={location}
        guess={guess}
        setGuess={setGuess}
        win={win}
        setWin={setWin}
        setScore={setScore}
        score={score}
        userGiveUp={userGiveUp}
        setUserGiveUp={setUserGiveUp}
        setStart={setStart}
        setNewGame={setNewGame}
      />
      {start || userGiveUp? 
      (<div id="panel-container">
        <Panel
          id="panel"
          start={start}
          location={location}
          droppedPin={droppedPin}
          userGiveUp={userGiveUp}
          win={win}
        />
      </div>) : null }
      {start ? 
      (<div id="score-wrapper">
        <Score score={score} id="score" />
      </div>) : null }

      {!start && !userGiveUp? 
      (<div id = "welcome-message"><div id="welcome-words"> Welcome to Geo-Vermonter! 
      When you hit start, you'll be dropped at a random location within Vermont. Use the North, South, East and West buttons to look around, but beware: you lose one point every time you do so.  When you think you know what county you're in, press guess! Each incorrect guess will subtract 10 points from your score. Good luck! </div></div>) : null}

      {!start && !userGiveUp? 
      (<div id="start-container">
      <button id="start-button" onClick={gameStart}>
        Start
      </button>
      </div>) : null}
      {newGame ? 
      (<div id ="new-game-container">
        <button id = "new-game-button" onClick={() => window.location.reload()}>New Game</button>
      </div>) : null } 

    </div>
  );
}

export default App;
