import React from "react";
import "../styles/Boutton.css";
//import LoginButton from "../pages/Connexion";
import tokenIsValid from "../middleware/tokenIsValid";

export default function Navbar() {
  var LoginOrLogoutButton = LogoutButton;

  const token = sessionStorage.getItem("JWT");
  tokenIsValid().then((tokenValidity) => {
    if (token == null || tokenValidity == false) {
      LoginOrLogoutButton = LoginButton;
    }
  });

  return (
    <nav className="navbar">
      <div className="titreNavbar">StockMaster</div>
      <div className="navbar-links">
        <a href="/">Accueil</a>
        <a href="/">A propos</a>
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
