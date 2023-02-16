// Header.js

import React from "react";
import { Link } from "react-router-dom";
import "../Header/header.css";
import logo from "../../assets/img/MarvelLogo.svg_uw9pi8.png";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="menu-item">
        <img src={logo} alt="Marvel logo" className="logo" />
      </Link>

      <nav className="menu">
        <Link to="/characters" className="menu-item">
          Characters
        </Link>
        <Link to="/comics" className="menu-item">
          Comics
        </Link>
        <Link to="/favorites" className="menu-item">
          Favorites
        </Link>
      </nav>
    </div>
  );
};

export default Header;
