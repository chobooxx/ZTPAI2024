import React from "react";
import "../LoginPage/LoginPage.css";

const RegisterPage = () => {
  return (
    <div className="over-conteriner">
      <div className="container">
        <div className="logo">
          <img alt="" id="logoDesktop" src="../../../img/logo.svg" />
        </div>

        <div className="login-container">
          <form action="register" method="POST">
            <input name="email" type="text" placeholder="Email" />
            <input name="password" type="password" placeholder="Password" />
            <input name="name" type="text" placeholder="Name" />
            <input name="surname" type="text" placeholder="Surname" />
            <button type="submit">REGISTER</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
