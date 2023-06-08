import React, { useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "../styles/style.css";
import { wait } from "@testing-library/user-event/dist/utils";

function MyMapComponent() {
  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoidGltb3RoZWVyaW91IiwiYSI6ImNsaTdoNDEzNDFpOWozZG1sNzlhOXk3MnUifQ.gOtqKpJ4vQu4hMcq7Nclhg";
    var map = new mapboxgl.Map({
      container: "map",
      //style: "mapbox://styles/mapbox/light-v11",
      style: "mapbox://styles/mapbox/dark-v11",
      center: [1.888334, 46.603354], // position de départ
      zoom: 5, // niveau de zoom de départ
    });

    var cities = [
      "Paris",
      "Lille",
      "Marseille",
      "Bordeaux",
      "Lyon",
      "Montpellier",
      "Toulouse",
      "Nantes",
      "Strasbourg",
      "Nice",
      "Brest",
      "Rennes",
      "Reims",
      "Toulon",
      "Grenoble",
      "Dijon",
      "Angers",
      "Nimes",
      "Aix-en-Provence",
    ];

    cities.forEach(async (city) => {
      // URL pour la requête API
      var apiUrl = `http://localhost:3000/weather/city/` + city + `/FR`;

      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          // Crée un élément HTML pour le marqueur
          var el = document.createElement("div");
          el.className = "marker";
          el.style.background = "transparent";
          el.style.width = "5vw";
          el.style.height = "5vh";
          el.style.color = "white";
          el.innerHTML = Math.round(data["data"]["temperature"]) + `°C`;

          const lon = data["lon"];
          const lat = data["lat"];

          // Crée un popup avec plus d'informations
          var popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
            `<h3>` +
              data["city"] +
              `</h3><p>Température : ` +
              data["data"]["temperature"] +
              `°C</p><p>Humidité : ` +
              data["data"]["humidity"] +
              `%</p>`
          );

          // Crée le marqueur et l'ajoute à la carte
          new mapboxgl.Marker(el)
            .setLngLat([lon, lat])
            .setPopup(popup) // Associe le popup au marqueur
            .addTo(map);
        });
    });
  });

  return <div id="map" style={{ width: "100%", height: "100%" }}></div>;
}
export default MyMapComponent;
