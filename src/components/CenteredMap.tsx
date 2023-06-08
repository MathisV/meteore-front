import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "../styles/style.css";
import "../styles/Map.css";

type CenteredMapProps = {
  lon: any;
  lat: any;
};

const CenteredMap: React.FC<CenteredMapProps> = ({ lon, lat }) => {
  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoidGltb3RoZWVyaW91IiwiYSI6ImNsaTdoNDEzNDFpOWozZG1sNzlhOXk3MnUifQ.gOtqKpJ4vQu4hMcq7Nclhg";
    new mapboxgl.Map({
      container: "map",
      //style: "mapbox://styles/mapbox/light-v11",
      style: "mapbox://styles/mapbox/dark-v11",
      center: [lon, lat], // position de départ
      zoom: 12, // niveau de zoom de départ
      interactive: false,
    });
  });
  return (
    <div id="map" style={{ width: "100%", height: "300px" }}>
      MAP
    </div>
  );
};
export default CenteredMap;
