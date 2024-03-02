import React from "react";
import "../Style/header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <h1>Family Wellness</h1>
        <h2>Message Tharapy</h2>
      </div>
      <div className="navbar">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Service</li>
          <li>FAQ</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
