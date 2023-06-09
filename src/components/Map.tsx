import { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "../styles/style.css";

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
      "Marseille",
      "Lyon",
      "Toulouse",
      "Nice",
      "Nantes",
      "Strasbourg",
      "Montpellier",
      "Bordeaux",
      "Lille",
      "Rennes",
      "Reims",
      "Saint-Étienne",
      "Toulon",
      "Le Havre",
      "Angers",
      "Grenoble",
      "Dijon",
      "Nîmes",
      "Aix-en-Provence",
      "Brest",
      "Le Mans",
      "Amiens",
      "Tours",
      "Limoges",
      "Clermont-Ferrand",
      "Besançon",
      "Metz",
      "Perpignan",
      // "New York",
      // "Los Angeles",
      // "Chicago",
      // "Houston",
      // "London",
      // "Berlin",
      // "Madrid",
      // "Barcelone",
      // "Rome",
      // "Milan",
      // "Amsterdam",
      // "Bruxelles",
      // "Lisbonne",
      // "Dublin",
      // "Moscou",
      // "Tokyo",
      // "Pékin",
      // "Shanghai",
      // "Séoul",
      // "Bangkok",
      // "Singapour",
      // "Istanbul",
      // "Le Caire",
      // "Mexico",
      // "Rio de Janeiro",
      // "Sao Paulo",
      // "Buenos Aires",
      // "Sydney",
      // "Caracas",
      // "Bogota",
      // "Lima",
      // "Dakar",
      // "Johannesburg",
      // "Casablanca",
      // "Alger",
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
