import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FaHotjar, FaUser, FaRegArrowAltCircleRight } from "react-icons/fa";
import { GlobalContext } from "../context/GlobalState";
import axios from "axios";

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

  const navigate = useNavigate();

  const onRegisterChange = (e) => {
    setFormRegisterData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onLoginChange = (e) => {
    setFormLoginData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //Create Registration Logic
  const onSubmit = async (e) => {
    e.preventDefault();

    if (password !== password2) {
      alert("Passwords must match");
      setFormRegisterData((prevState) => ({
        ...prevState,
        password: "",
        password2: "",
      }));
    }

    const userData = {
      name,
      email,
      password,
    };

    //Make API call to register user
    const REGISTER_URL = "/api/registerUser";
    try {
      const response = await axios.post(REGISTER_URL, userData);
      if (response.data?.token) {
        localStorage.setItem("loggedUser", JSON.stringify(response.data));
        navigate("/dashboard");
      }
    } catch (error) {
      setFormRegisterData({
        name: "",
        email: "",
        password: "",
        password2: "",
      });
      alert("The email must be unique");
    }
  };

  //Make sure that user cannot go back to registration form once logged in
  useEffect(() => {
    if (localStorage.getItem("loggedUser")) {
      navigate("/dashboard");
    }
  }, []);

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
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">About</a>
                </li>
                <li>
                  <a href="/">Contact</a>
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
            <form onSubmit={onSubmit}>
              <div className="input-container">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  placeholder="Enter your name"
                  onChange={onRegisterChange}
                  required
                />
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={email}
                  placeholder="Enter your email"
                  onChange={onRegisterChange}
                  required
                />
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  placeholder="Enter your password"
                  onChange={onRegisterChange}
                  required
                />
                <input
                  type="password"
                  id="password2"
                  name="password2"
                  value={password2}
                  placeholder="Confirm your password"
                  onChange={onRegisterChange}
                  required
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
                  onChange={onLoginChange}
                  required
                />
                <input
                  type="password"
                  id="loginPassword"
                  name="loginPassword"
                  value={loginPassword}
                  placeholder="Enter your password"
                  onChange={onLoginChange}
                  required
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
