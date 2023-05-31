import React from "react";
import "../styles/style.css";
import "../styles/Card.css";
import "../styles/Navbar.css";
import Card from "../components/Card";
import tokenIsValid from "../middleware/tokenIsValid";
import MyMapComponent from "../components/Map";
import "../styles/Map.css";
import logoMeteore from "../img/logo_meteore_blanc.png";
import icon_soleil from "../img/icon_soleil.png";
import icon_precipitation from "../img/icon_pluie.png";
import icon_humidite from "../img/icon_humidite.png";

function Home() {
  /*
  const token = sessionStorage.getItem("JWT");
  tokenIsValid().then((tokenValidity) => {
    if (token == null || tokenValidity == false) {
      window.location.href = "/connexion";
    }
  });*/
  return (
    <div className="App">
      <div className="card-container">
        <Card
          title="Température"
          value="21°C"
          icon="src/img/icon_soleil.png"
          valueMin="10°C"
          valueMax="25°C"
        />
        <Card
          title="Précipitation"
          value="30mm"
          icon="src/img/icon_pluie.png"
          valueMin="15mm"
          valueMax="35mm"
        />
        <Card
          title="Humiditée"
          value="30%"
          icon="src/img/icon_pluie.png"
          valueMin="15%"
          valueMax="35%"
        />
      </div>
      <div className="map-container">
        <MyMapComponent />
      </div>
    </div>
  );
}

export default Home;
