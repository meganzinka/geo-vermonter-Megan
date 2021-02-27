import React from "react";
import { useEffect, useState } from "react";
import Panel from './Panel'

//imported before but don't use: 
// import DisplayButtons from './DisplayButtons'

export default function GeoData(props) {
  const data = ""
  const [county, setCounty] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    if (!data && props.start === true) {
      let newX = props.droppedPin[0];
      let newY = props.droppedPin[1];
      fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${newX}&lon=${newY}`
      )
        .then((res) => res.json())
        .then((jsonObj) => {
          //   setData(jsonObj);
          setCounty(jsonObj.address.county)
          setCity(jsonObj.address.city);
        });
    }
  });

  return (
    <div>
      <Panel start={props.start} county = {county} city = {city} droppedPin = {props.droppedPin} quitGame = {props.quitGame} />
    </div>
  );
}
