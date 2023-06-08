import "../styles/Boutton.css";
//import LoginButton from "../pages/Connexion";
import logoMeteore from "../img/logo_meteore_blanc.png";
import SearchBar from "./SearchBar";

export default function Navbar() {
  //var LoginOrLogoutButton = LogoutButton;

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

// function LogoutButton() {
//   return <a href="/Logout">Logout</a>;
// }

// function LoginButton() {
//   return <a href="/Connexion">Connexion</a>;
// }
