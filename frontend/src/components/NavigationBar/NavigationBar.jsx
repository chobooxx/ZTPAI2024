import React from "react";
import { Link } from "react-router-dom";

import AuthService from "../../service/auth.service";

import "./NavigationBar.css";

const NavigationBar = () => {
  const logOut = () => {
    AuthService.logout();
  };

  return (
    <div className="nav_bar">
      <div className="logo-container">
        <img
          alt="BookYouLogo"
          id="logoMoblie"
          src="../../../img/mobileLogo.svg"
        />
      </div>

      <Link to="/homepage" className="menu_element">
        <img alt="Home Icon" src="../../../img/home.svg" />
        <div>HOME</div>
      </Link>
      <Link to="/categories" className="menu_element">
        <img alt="Categories Icon" src="../../../img/category.svg" />
        <div>CATEGORIES</div>
      </Link>
      <Link to="/to_read" className="menu_element">
        <img alt="To-read Icon" src="../../../img/to_read.svg" />
        <div>TO-READ</div>
      </Link>
      <Link to="/search" className="menu_element">
        <img alt="To-read Icon" src="../../../img/to_read.svg" />
        <div>SEARCH</div>
      </Link>
      <Link to="/profile" className="menu_element">
        <img alt="Profile icon" src="../../../img/me.svg" />
        <div>ME</div>
      </Link>
      <a href="/" id="logoutButton" className="menu_element" onClick={logOut}>
        <img alt="Logout Icon" src="../../../img/logout.svg" />
        <div className="logout">LOGOUT</div>
      </a>
    </div>
  );
};

export default NavigationBar;
