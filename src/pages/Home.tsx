import React from "react";
import "../styles/style.css";
import "../styles/Navbar.css";
import Card from "../components/Card";
import tokenIsValid from "../middleware/tokenIsValid";

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
      {/*token*/}
      <div className="card-container">
        <Card
          imageSrc="/ic_bitcoin.png"
          imgAlt="il fait beau"
          title="Carte météo ici mdr"
          symbol="Lille"
          price={10}
        />
      </div>
    </div>
  );
}

export default Home;
