import React from "react";
import { Outlet, Link } from "react-router-dom";

import "./Navbar.css";
import Feature from "./Feature";
import Recommded from "./Recommded";
import Shop from "./Shop";
import Home from "./Home";
import Cart from "./Cart";

const Navbar = () => {
  return (
    <div>
      <div className="container-nav">
        <div className="log">
        <img src="images\logo-full.png" alt="Logo" className="logo" />
        </div>
        <div className="left-items">
          
        <Link to="/Home">Home</Link>
          <Link to="/Shop">Shop</Link>
          <Link to="/Feature">Feature</Link>
          <Link to="/Recommded">Recommded</Link>
        </div>
        <div className="search-bar">
          <input className="search-input" type="text" placeholder="Search..." />
          <button className="search-button">  <Link to="/Cart">Cart</Link> </button>
        </div>
        <div className="right-items">
          <button className="login-button">Login</button>
          <button className="signup-button">Signup</button>
        </div>
      </div>


    </div>
  );
};

export default Navbar;
