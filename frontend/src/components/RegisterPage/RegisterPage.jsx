import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import { useNavigate } from "react-router-dom";

import AuthService from "../../service/auth.service";

import "../LoginPage/LoginPage.css";

const required = (value) => {
  if (!value) {
    return (
      <div className="" role="alert">
        This field is required!
      </div>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vname = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="" role="alert">
        This field must have between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const RegisterPage = () => {
  let navigate = useNavigate();

  const form = useRef();
  const checkBtn = useRef();

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeName = (e) => {
    const name = e.target.value;
    setName(name);
  };

  const onChangeSurname = (e) => {
    const surname = e.target.value;
    setSurname(surname);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.register(name, surname, email, password).then(
        (response) => {
          setMessage(response.data.message);
          setSuccessful(true);
          navigate("/login");
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setMessage(resMessage);
          setSuccessful(false);
        }
      );
    }
  };

  return (
    <div className="over-conteriner">
      <div className="container">
        <div className="logo">
          <img alt="" id="logoDesktop" src="../../../img/logo.svg" />
        </div>

        <div className="login-container">
          {/* <form action="register" method="POST">
            <input name="email" type="text" placeholder="Email" />
            <input name="password" type="password" placeholder="Password" />
            <input name="name" type="text" placeholder="Name" />
            <input name="surname" type="text" placeholder="Surname" />
            <button type="submit">REGISTER</button>
          </form> */}

          <Form onSubmit={handleRegister} ref={form}>
            {!successful && (
              <div>
                <Input
                  type="text"
                  name="name"
                  value={name}
                  onChange={onChangeName}
                  validation={[required, vname]}
                  placeholder="name"
                />

                <Input
                  type="text"
                  name="surname"
                  value={surname}
                  onChange={onChangeSurname}
                  validation={[required, vname]}
                  placeholder="Surname"
                />

                <Input
                  type="text"
                  name="email"
                  value={email}
                  onChange={onChangeEmail}
                  validations={[required, validEmail]}
                  placeholder="Email"
                />

                <Input
                  type="password"
                  name="password"
                  value={password}
                  onChange={onChangePassword}
                  validations={[required, vpassword]}
                  placeholder="Password"
                />

                <button className="button-auth">Register</button>
              </div>
            )}

            {/* {message && (
              <div className="">
                <div
                  className={successful ? "login_errors" : "login_errors"}
                  role="alert"
                >
                  {message}
                </div>
              </div>
            )} */}
            <CheckButton style={{ display: "none" }} ref={checkBtn} />
          </Form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
