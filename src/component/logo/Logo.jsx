import React from "react";
import "./logo.css";
import logo from "../../assets/logo.svg";

const Logo = () => {
  return (
    <>
      <div className="logo-main">
        <img src={logo} alt="logo" width="30px" height="40px" />
      </div>
    </>
  );
};

export default Logo;
