import React from "react";
import { FaHotjar } from "react-icons/fa";

const Header = () => {
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
        </ul>
      </div>
    </nav>
  );
};

export default Header;
