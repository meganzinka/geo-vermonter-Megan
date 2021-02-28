import React from "react";
import { useEffect, useState } from "react";
import Panel from "./Panel";

export default function GeoData(props) {
  // const [location, setLocation] = useState({county: "", city: ""});

  useEffect(() => {
    if (props.location.county === "" && props.start === true) {
      let newX = props.droppedPin[0];
      let newY = props.droppedPin[1];
      fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${newX}&lon=${newY}`
      )
        .then((res) => res.json())
        .then((jsonObj) => {
          console.log(jsonObj.address)
          if(jsonObj.address.town) {
            props.setLocation({county: jsonObj.address.county, city: jsonObj.address.town}) 
          } else if (jsonObj.address.city) {
            props.setLocation({county: jsonObj.address.county, city: jsonObj.address.city})
          } else if (jsonObj.address.village) {
            props.setLocation({county: jsonObj.address.county, city: jsonObj.address.village})
          }
        });
    }
  });

  return (
    <div>
      <Panel
        start={props.start}
        location={props.location}
        droppedPin={props.droppedPin}
        userGiveUp={props.userGiveUp}
      />
    </div>
  );
}
