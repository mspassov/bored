import React, { useState, useEffect } from "react";
import { FaHotjar, FaUser, FaRegArrowAltCircleRight } from "react-icons/fa";
import Header from "./Header";

const Landing = () => {
  const [formRegisterData, setFormRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const [formLoginData, setFormLoginData] = useState({
    loginEmail: "",
    loginPassword: "",
  });

  const { name, email, password, password2 } = formRegisterData;
  const { loginEmail, loginPassword } = formLoginData;

  const onChange = () => {};

  return (
    <React.Fragment>
      <div className="grid">
        <div className="grid-section header-section">
          <nav>
            <div className="container">
              <div className="logo">
                <FaHotjar color="orange" />
                <div className="logo-name">bored</div>
              </div>
              <ul className="nav-list">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="grid-section register-section">
          <div className="register-container">
            <div className="title-container">
              <FaUser color="#56f06b" />
              <h3 className="register-title">Get Started</h3>
            </div>
            <form>
              <div className="input-container">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  placeholder="Enter your name"
                  onChange={onChange}
                />
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={email}
                  placeholder="Enter your email"
                  onChange={onChange}
                />
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  placeholder="Enter your password"
                  onChange={onChange}
                />
                <input
                  type="password"
                  id="password2"
                  name="password2"
                  value={password2}
                  placeholder="Confirm your password"
                  onChange={onChange}
                />
                <button type="submit" className="register-btn">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="grid-section login-section">
          <div className="login-container">
            <div className="title-container">
              <FaRegArrowAltCircleRight color="#f5b8f2" />
              <h3 className="register-title">Welcome Back</h3>
            </div>
            <p className="form-p">Good to have you back!</p>
            <form>
              <div className="input-container">
                <input
                  type="text"
                  id="loginEmail"
                  name="loginEmail"
                  value={loginEmail}
                  placeholder="Enter your email"
                  onChange={onChange}
                />
                <input
                  type="password"
                  id="loginPassword"
                  name="loginPassword"
                  value={loginPassword}
                  placeholder="Enter your password"
                  onChange={onChange}
                />
                <button type="submit" className="login-btn">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Landing;
