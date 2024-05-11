import React from "react";
import "./NavigationBar.css";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div className="nav_bar">
      <img alt="" id="logoMoblie" src="../../../img/mobileLogo.svg" />
      <Link to="/homepage" className="menu_element">
        <img alt="" src="../../../img/home.svg" />
        <div>HOME</div>
      </Link>
      <Link to="/categories" className="menu_element">
        <img alt="" src="../../../img/category.svg" />
        <div>CATEGORIES</div>
      </Link>
      <Link to="/" className="menu_element">
        <img alt="" src="../../../img/to_read.svg" />
        <div>TO-READ</div>
      </Link>
      <Link to="/" className="menu_element">
        <img alt="" src="../../../img/me.svg" />
        <div>ME</div>
      </Link>
      <Link to="/" id="logoutButton" className="menu_element">
        <img alt="" src="../../../img/logout.svg" />
        <div className="logout">LOG OUT</div>
      </Link>
    </div>
  );
};

export default NavigationBar;
