import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./styles.css";
import logo from "../../assets/img/logo.svg";
import seperator from "../../assets/img/seperator.svg"
const Header = () => {
  return (
    <header className="container-header mb-5">
      <Container fluid>
        <div>
          <Link to="/">
            <img title="Go to home" className="App-logo" alt="Go to home" src={logo} />
            <img src={seperator} className="App-logo" alt="logo" />
            <span>
            Search for any Pokémon that exists on the planet.
            </span>
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
