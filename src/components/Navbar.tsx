import React from "react";
import "../styles/Boutton.css";
//import LoginButton from "../pages/Connexion";
import tokenIsValid from "../middleware/tokenIsValid";
import logoMeteore from "../img/logo_meteore_blanc.png";
import SearchBar from "./SearchBar";
import HandleSearch from "../middleware/HandleSearch";
import { Navigate } from "react-router-dom";

export default function Navbar() {
  var LoginOrLogoutButton = LogoutButton;

  /*const token = sessionStorage.getItem("JWT");
  tokenIsValid().then((tokenValidity) => {
    if (token == null || tokenValidity == false) {
      LoginOrLogoutButton = LoginButton;
    }
  });*/

  return (
    <nav className="navbar">
      <img src={logoMeteore} className="logoMeteore" alt="logoMeteore" />
      <div className="titreNavbar">Météore</div>
      <SearchBar
        onSearch={() => {
          /*TODO*/
        }}
      />{" "}
      {/* Ajoutez cette ligne */}
      <div className="navbar-links">
        <a href="/">Accueil</a>
        <a href="/">Vigilence météo</a>
        {/*LoginOrLogoutButton*/}
      </div>
    </nav>
  );
}

function LogoutButton() {
  return <a href="/Logout">Logout</a>;
}

function LoginButton() {
  return <a href="/Connexion">Connexion</a>;
}
