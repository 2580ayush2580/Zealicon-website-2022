import React from "react";
import BackgrounImage from "../../assets/image/Background.png";
import ZealiconLogo from "../../assets/image/zealicon-logo.svg";

import "./style.css";
const Home = () => {
  return (
    <div className="mainShowcase-wrapper">
      <div className="homeNavbar">
        <ul className="homeNavbarItem font-demi">
          <li>
            <img className="ZealiconLogo" src={ZealiconLogo} alt="Zealicon" />
          </li>
          <li>Events</li>
          <li>About</li>
          <li>Team</li>
          <li>Reach</li>
          <li>Sponsor</li>
          <li>
            <button className="btn navbar-btn">Sign in</button>
          </li>
        </ul>
      </div>
      <div className="mainShowcase">
        {/* <img
          className="mainShowcase-image"
          src={BackgrounImage}
          alt="Zealicon"
        /> */}
        <div className="mainShowcase-heading font-bold">
          <span className="mainShowcase-heading-welcome-color font-demi">
            welcome to
          </span>{" "}
          Zealicon
        </div>
        <div className="mainShowcase-button-wrapper">
          <div className="mainShowcase-button font-bold">REGISTER NOW</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
