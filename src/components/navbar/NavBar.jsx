import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo3 from "../../assets/images/logo3.png";
// import stan1 from "../../assets/images/stan1.jpg";
import stan2 from "../../assets/images/stan2.jpeg";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <div className="nav-container">
      <nav className="navbar">
        <div className="top-nav">
          <div className="logo">
            <NavLink to="">
              <img src={logo3} alt="Logo" />
              <span>STFlix</span>
            </NavLink>
          </div>
          <div className="toggle">
            <i className="fa fa-moon toggle-icon"></i>
            <i className="fa fa-sun toggle-icon"></i>
            <div className="toggle-ball"></div>
          </div>
        </div>
        <div className="down-nav">
          <div className="serch-nav">
            <input
              type="text"
              placeholder="Search Movies "
              className="input-icon"
            />
            <i className="fas fa-search icon"></i>
          </div>
          <div className="navlist">
            <ul className="list">
              <NavLink to="">Home</NavLink>
              <NavLink to="">Popular</NavLink>
              <NavLink to="">Trending</NavLink>
              <NavLink to="">Movies</NavLink>
              <NavLink to="">TvSeries</NavLink>
            </ul>
          </div>
          <div className="profile">
            <span className="profile-pic">
              <img src={stan2} alt="profile" />
            </span>
            <NavLink to="">
              <h3>Login</h3>
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
