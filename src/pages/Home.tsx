import "../styles/style.css";
import "../styles/Card.css";
import "../styles/Navbar.css";
import "../styles/SearchBar.css";
import MyMapComponent from "../components/Map";
import "../styles/Map.css";

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
