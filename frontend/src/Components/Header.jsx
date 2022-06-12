import React from "react";
import { FaHotjar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const onLogout = (e) => {
    localStorage.removeItem("loggedUser");
    navigate("/");
  };

  return (
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
          <li>
            <button className="logout-btn" onClick={onLogout}>
              Log Out
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
