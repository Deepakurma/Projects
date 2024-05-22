import React from "react";
import Github from "./assets/github.png";
import Instagram from "./assets/instagram.png";
import LinkedIn from "./assets/linkedin.png";
import Logo from "./assets/logo.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer">
        <div className="s-con">
          <img src={Github} alt="" />
          <img src={Instagram} alt="" />
          <img src={LinkedIn} alt="" />
        </div>
        <div className="f-logo">
          <img src={Logo} alt="" />
        </div>
      </div>
      <div className="blur f-b-1"></div>
      <div className="blur f-b-2"></div>

    </div>
  );
};

export default Footer;
