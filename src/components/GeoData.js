import React from "react";
import { useEffect, useState } from "react";
import Panel from "./Panel";

//imported before but don't use:
// import DisplayButtons from './DisplayButtons'

export default function GeoData(props) {
  const [location, setLocation] = useState({county: "", city: ""});

  useEffect(() => {
    if (location.county==="" && props.start === true) {
      let newX = props.droppedPin[0];
      let newY = props.droppedPin[1];
      fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${newX}&lon=${newY}`
      )
        .then((res) => res.json())
        .then((jsonObj) => {
          if(jsonObj.address.town) {
            setLocation({county: jsonObj.adddress.county, city: jsonObj.address.town}) 
          } else if (jsonObj.address.city) {
            setLocation({county: jsonObj.adddress.county, city: jsonObj.address.city})
          } else if (jsonObj.address.village) {
            setLocation({county: jsonObj.adddress.county, city: jsonObj.address.village})
          }
        });
    }
    console.log(location)
  });

  return (
    <div>
      <Panel
        start={props.start}
        location={location}
        droppedPin={props.droppedPin}
        giveUp={props.userGiveUp}
        // city = {city}
      />
    </div>
  );
}

// function changeCity(jsonObj) {
//   if (jsonObj.address.city) {
//     setTown(jsonObj.address.city);
//   } else if (jsonObj.address.town) {
//     setTown(jsonObj.address.town);
//   } else if (jsonObj.address.village) {
//     setTown(jsonObj.address.village);
//   } else if (jsonObj.address.hamlet) {
//     setTown(jsonObj.address.village);
//   }

// switch (jsonObj) {
//   case (jsonObj.address.village === true):
//     setTown(jsonObj.address.village);
//     break;
//   // case jsonObj.address.hamlet:
//   //   setTown(jsonObj.address.city);
//   //   break;
//   case (jsonObj.address.town=== true):
//     setTown(jsonObj.address.town);
//     break;
//   case (jsonObj.address.city=== true):
//     setTown(jsonObj.address.city);
//     break;
//   default:
//     setTown("could not find town");
//     console.log(jsonObj.address.village);
//     console.log(jsonObj.address.hamlet);
//     console.log(jsonObj.address.town)
//     console.log(jsonObj.address.city)
//     console.log(town)
// }


// setTown({
//   town: jsonObj.address.village ||
//   jsonObj.address.city ||
//   jsonObj.address.town,
// });


// useEffect(() => {
//   if (!data && props.start === true) {
//     let newX = props.droppedPin[0];
//     let newY = props.droppedPin[1];

//     // while(!county && !town) {
//     fetch(
//       `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${newX}&lon=${newY}`
//     )
//       .then((res) => res.json())
//       .then((jsonObj) => {
//         console.log(jsonObj.address);
//         setCounty(jsonObj.address.county);
//         console.log(jsonObj.address.county);
//         setTown({
//             town: jsonObj.address.village ||
//             jsonObj.address.city ||
//             jsonObj.address.town,
//         });
//         // setData(jsonObj);
//         console.log(town)
//       });
//     // }
  // }