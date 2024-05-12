import React, { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { isEmail } from "validator";
import AuthService from "../../service/auth.service";

import "./LoginPage.css";

const required = (value) => {
  if (!value) {
    return (
      <div className="" role="alert">
        This field is required!
      </div>
    );
  }
};

const LoginPage = () => {
  let navigate = useNavigate();

  const form = useRef();
  const checkBtn = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.login(email, password).then(
        () => {
          navigate("/homepage");
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setLoading(false);
          setMessage(resMessage);
        }
      );
    } else {
      setLoading(false);
    }
  };

  return (
    <div className="over-conteriner">
      <div className="container">
        <div className="logo">
          <img alt="" id="logoDesktop" src="../../../img/logo.svg" />
        </div>

        <div className="login-container">
          <Form onSubmit={handleLogin} ref={form}>
            <Input
              type="password"
              className="login-input"
              name="email"
              value={email}
              onChange={onChangeEmail}
              validation={[required]}
              placeholder="Email"
            />
            <Input
              type="password"
              name="password"
              className="login-input"
              value={password}
              onChange={onChangePassword}
              validations={[required]}
              placeholder="Password"
            />
            <button className="button-auth" disabled={loading}>
              <p>LOGIN</p>
            </button>

            {message && (
              <div className="login-alert" role="alert">
                <p>{message}</p>
              </div>
            )}
            <CheckButton style={{ display: "none" }} ref={checkBtn} />

            <Link to="" className="add-info">
              Forgot Password?
            </Link>
            <Link to="/register" className="add-info">
              Don't have an account? Sign up!
            </Link>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
