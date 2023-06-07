import { response } from "express";
import "../styles/style.css";
import React from "react";
import LoginButton from "../components/Navbar";
export default function Connexion() {
  return (
    <div className="App">
      <LoginForm />
    </div>
  );
}

type FormState = {
  username: string;
  password: string;
};
type FormProps = {};

class LoginForm extends React.Component<FormProps, FormState> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event: { preventDefault: () => void; target: any }) {
    event.preventDefault();
    const target = event.target;
    if (target.name === "username") {
      this.setState({
        username: target.value,
      });
    } else if (target.name === "password") {
      this.setState({
        password: target.value,
      });
    }
  }

  handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    console.log(this.state);
    // Make a call on the backend to check the credentials
    // If they are correct, redirect the user to the stocks page
    // Otherwise, display an error message
    // backend url: http://localhost:8000/api/user/login with date in json

    // Backend call
    fetch("http://localhost:8000/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 200) {
          console.log("Success:", data.token);
          sessionStorage.setItem("JWT", data.token);
          window.location.href = "/";
        } else {
          console.log("Error:", data);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  render() {
    return (
      <form className="login-form" onSubmit={this.handleSubmit}>
        <label htmlFor="username">Nom d'utilisateur</label>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleInputChange}
        />
        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleInputChange}
        />
        <button type="submit" className="login-button">
          Se connecter
        </button>
      </form>
    );
  }
}
