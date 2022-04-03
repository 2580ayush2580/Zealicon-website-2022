import React from "react";
import BackgrounImage from "../../assets/image/background.gif";
import ZealiconLogo from "../../assets/image/zealicon-logo.svg";
import { Link } from "react-router-dom";

import "./style.css";
const Home = () => {
  return (
    <div id="home" className="mainShowcase-wrapper">
      <div className="homeNavbar">
        <ul className="homeNavbarItem font-demi">
          <li>
            <button className="btn">
              <a className="navbarBtn" href="/#home">
                <img
                  className="ZealiconLogo"
                  src={ZealiconLogo}
                  alt="Zealicon"
                />
              </a>
            </button>
          </li>
          <Link to='events'>
            <button className="btn navbarBtn">Events</button>
          </Link>
          <li>
            <button className="btn">
              <a className="navbarBtn" href="/#about">
                About
              </a>
            </button>
          </li>
          <li>
            <button className="btn">
              <a className="navbarBtn" href="/#team">
                Team
              </a>
            </button>
          </li>
          <Link to='reach'>
            <button className="btn navbarBtn">Reach</button>
          </Link>
          <li>
            <button className="btn">
              <a className="navbarBtn" href="/#sponsor">
                Sponsor
              </a>
            </button>
          </li>
          <Link to='/login'>
            <button className="btn navbar-btn">Sign in</button>
          </Link>
        </ul>
      </div>
      <div className="mainShowcase">
        {/* <img
          className="mainShowcase-image"
          src={BackgrounImage}
          alt="Zealicon"
        /> */}
        <div className="mainShowcase-heading">
          <span className="mainShowcase-heading-welcome-color font-demi">
            welcome to
          </span>{" "}
          <span className="font-bold">Zealicon</span>
        </div>
        <Link to='/register'>
        <div className="mainShowcase-button-wrapper">
          <div className="mainShowcase-button font-bold text-white">
           REGISTER NOW
          </div>
        </div></Link>

      </div>
    </div>
  );
};

export default Home;
