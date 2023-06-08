import React from "react";
import "../styles/style.css";
import "../styles/Card.css";
import "../styles/Navbar.css";
import "../styles/SearchBar.css";
import Card from "../components/Card";
import tokenIsValid from "../middleware/tokenIsValid";
import MyMapComponent from "../components/Map";
import SearchBar from "../components/SearchBar";
import axios from "axios";
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

  // Le reste du code du composant Home

  return (
    <div className="App">
      <div className="map-container">
        <MyMapComponent />
      </div>
    </div>
  );
}

export default Home;
