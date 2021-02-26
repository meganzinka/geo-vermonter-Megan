import React from "react";
import L from "leaflet";
import leafletPip from "leaflet-pip";
import Map from "./Map.js";
import App from "../App.js";
import { useMap } from "react-leaflet";
// import {useMap} from 'leaflet'

function MyComponent(props) {
  const map = useMap();
  L.control.scale().addTo(map);
map.setView(props.center, props.zoom);
  return null;
}

export default MyComponent;
// const [center, setCenter] = useState ("");
// const [zoom, setZoom] = useState("");
