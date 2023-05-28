import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "../styles/style.css";

function MyMapComponent() {
  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoidGltb3RoZWVyaW91IiwiYSI6ImNsaTdoNDEzNDFpOWozZG1sNzlhOXk3MnUifQ.gOtqKpJ4vQu4hMcq7Nclhg";
    const map = new mapboxgl.Map({
      container: "map",
      /* https://docs.mapbox.com/api/maps/styles/ */
      style: "mapbox://styles/mapbox/light-v11",
      /* Coordonnées de la france (Longitude / Latitude) */
      center: [1.888334, 46.603354],
      zoom: 5,
    });

    return () => {
      map.remove();
    };
  }, []);
  /* style de la map */
  return <div id="map" style={{ width: "100%", height: "100%" }}></div>;
}

export default MyMapComponent;
