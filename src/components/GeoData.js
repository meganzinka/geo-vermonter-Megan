import React from "react";
import { useEffect, useState } from "react";
import Panel from './Panel'

//imported before but don't use: 
// import DisplayButtons from './DisplayButtons'

export default function GeoData(props) {
  const data = ""
  const [county, setCounty] = useState("");
  // const [city, setCity] = useState("");
  const [town, SetTown] = useState ("")

  useEffect(() => {
    if (!data && props.start === true) {
      let newX = props.droppedPin[0];
      let newY = props.droppedPin[1];
      console.log(newX);
      console.log(newY);
      fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${newX}&lon=${newY}`
      )
        .then((res) => res.json())
        .then((jsonObj) => {
          console.log(jsonObj.address)
          //   setData(jsonObj);
          setCounty(jsonObj.address.county);
          // setCity(jsonObj.address.city);
        //   setTown({
        //     town: jsonObj.address.village || jsonObj.address.hamlet || json.address.city || json.address.town
        // });
    }
  )};

  return (
    <div>
      <Panel start={props.start} county = {county} city = {city} droppedPin = {props.droppedPin} giveUp = {props.userGiveUp} />
    </div>
  );
  }




// if (jsonObj.address.city) {
//   town = jsonObj.address.city;
// } else if (jsonObj.address.town) {
//   town = jsonObj.address.town;
// } else if (jsonObj.address.village) {
//   town = jsonObj.address.village;
// } else if (jsonObj.address.hamlet) {
//   town = jsonObj.address.village;
// }
// console.log(town)
// })