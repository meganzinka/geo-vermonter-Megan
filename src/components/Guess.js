import React from "react";
import { useState } from "react";



//this is guess function, seeing that selected county from dropdown menu is same as pinpointed county 
export default function Guess(props) {
  function changeSelection(event, props) {
    console.log(props.location)
    if (event.target.value === props.location.county) {
      props.setWin(true); 
    } else console.log("you are wrong");
  }
//options of counties. default is to make sure that first choice (addison) is actually selected/clicked to translate that information 
  if (props.guess === true) {
    return (
      <div>
        <select onChange={changeSelection}>
          <option value="default">Please pick a county : </option>
          <option value="Addison County">Addison County</option>
          <option value="Bennington County">Bennington County</option>
          <option value="Caledonia County">Caledonia County</option>
          <option value="Chittenden County">Chittenden County</option>
          <option value="Essex County">Essex County</option>
          <option value="Franklin County">Franklin County</option>
          <option value="Grand-Isle County">Grand Isle County</option>
          <option value="Lamoille County"> Lamoille County</option>
          <option value="Orange County"> Orange County</option>
          <option value="Orleans County"> Orleans County</option>
          <option value="Rutland County">Rutland County</option>
          <option value="Washington County">Washington County</option>
          <option value="Windham County"> Windham County</option>
          <option value="Windsor County"> Windsor County</option>
        </select>
      </div>
    );
  } else return null;
}
