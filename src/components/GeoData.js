import React from "react";
import { useEffect, useState } from "react";

//GeoData is sourcing specific location details from nominatim.
export default function GeoData(props) {
  
//new x and new y are our new generated random location
//we then fetch the info and set it to setLocation. we assign the county.
//city is either the town, city, or village. all one variable "city"
  useEffect(() => {
    if (props.county.county === "" && props.start === true) {
      let newX = props.droppedPin[0];
      let newY = props.droppedPin[1];
      fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${newX}&lon=${newY}`
      )
        .then((res) => res.json())
        .then((jsonObj) => {
          props.changeLocation(jsonObj)
          console.log(props.county)})
        };
    })
  return (
    <div>
    </div>
  )

}

