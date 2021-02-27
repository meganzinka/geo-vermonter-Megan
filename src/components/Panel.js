import React from "react";
import { useState } from "react";

export default function Panel(props) {
    const [lat, setLat] = useState("?");
    const [long, setLong] = useState("?");
    const [county, setCounty] = useState("?");
    const [city, setCity] = useState("?");

    // if (start === true) {
    // setCity(props.city)
    // setCounty(props.county)
    // setLat(props.droppedPin[0])
    // setLong(props.droppedPin[0])
    // }
  return (
    <div>
      <h3>Latitude: {lat}</h3>
      <h3>Longitude: {long}</h3>
      <h3>County: {county}</h3>
      <h3>City: {city}</h3>
    </div>
  );
}


{/* <h3>latitude : {lat : `${newY}` ? `?`}</h3>  */}