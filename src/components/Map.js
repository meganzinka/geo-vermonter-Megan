import {
  MapContainer,
  TileLayer,
  Polygon,
  Marker,
  Polyline,
} from "react-leaflet";
import borderData from "../data/border";
import leafletPip from "leaflet-pip";
import L, { map } from "leaflet";
import { useState, useEffect } from "react";
import MyComponent from "./MyComponent";
import Compass from "./Compass.js";
import DisplayButtons from "./DisplayButtons";

function Map(props) {
  const [direction, setDirection] = useState("");

  let vtOutline = borderData.geometry.coordinates[0].map((coords) => [
    coords[1],
    coords[0],
  ]);

  let changeDirection = (evt) => {
    setDirection(evt.target.id);
  };

  return (
    <MapContainer
      center={props.center}
      zoom={8}
      scrollWheelZoom={false}
      doubleClickZoom={false}
      zoomControl={false}
      touchZoom={false}
      style={{ height: "600px", width: "600px" }}
    >
      <Compass
        droppedPin={props.droppedPin}
        changeDirection={changeDirection}
        direction={direction}
        style={{ zIndex: 100}}
        center={props.center}
      />
      <MyComponent center={props.center} zoom={props.zoom} />

      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
      />
      <Marker position={props.center} />
      <Polygon
        positions={vtOutline}
        pathOptions={{ color: "orange", fillOpacity: 0 }}
      />
    </MapContainer>
  );
}

export default Map;
