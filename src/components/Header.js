import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="leftHeader">
        <a href="#">
          <img src="../assets/logo.png"></img>
        </a>
      </div>
      <div className="rightHeader">
        <p>
          Handicrafted by <br />
          <span>Jim HLS</span>
        </p>
        <img src="../assets/avatar.jpg"></img>
      </div>
    </div>
  );
}

export default Header;
