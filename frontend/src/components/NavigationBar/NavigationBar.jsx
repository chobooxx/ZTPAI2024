import React from "react";
// { useState, useEffect }
import { Link } from "react-router-dom";

// import "./NavigationBar.css";
import AuthService from "../../service/auth.service";

const NavigationBar = () => {
  //  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  //  const [showAdminBoard, setShowAdminBoard] = useState(false);
  // const [currentUser, setCurrentUser] = useState(undefined);

  // useEffect(() => {
  //   const user = AuthService.getCurrentUser();

  //   if (user) {
  //     setCurrentUser(user);
  //      setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
  //      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
  //   }

  //   console.log(currentUser);
  // }, []);
  const logOut = () => {
    AuthService.logout();
  };

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
      <a href="/" id="logoutButton" className="menu_element" onClick={logOut}>
        <img alt="" src="../../../img/logout.svg" />
        <div className="logout">LOG OUT</div>
      </a>
    </div>
  );
};

export default NavigationBar;
