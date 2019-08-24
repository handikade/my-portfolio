import React from "react";
import "./Menubar.scss";
import logo from "./logo-w.png";

function Menubar() {
  return (
    <div className="menubar">
      <div className="menubar__logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="menubar__btn">MENU</div>
    </div>
  );
}

export default Menubar;
