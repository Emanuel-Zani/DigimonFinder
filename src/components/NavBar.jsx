import React from "react";
import logo from "../img/logo.png";
import "../style/Navbar.css";
import Filtrar from "./FIltrar";

const NavBar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="logo" width="270" height="70" />
      <Filtrar/>
    </div>
  );
};


export default NavBar;
