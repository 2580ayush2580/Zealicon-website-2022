import React from "react";
import BackgrounImage from "../../assets/image/background.gif";
import ZealiconLogo from "../../assets/image/zealicon-logo.svg";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import animationData from "./bg.json";

import "./style.css";
const Home = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
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
          <Link to="events">
            <button className="btn navbarBtn">Events</button>
          </Link>
          <li>
            <a className="navbarBtn" href="/#about">
              <button className="btn navbarBtn">About</button>
            </a>
          </li>
          <li>
            <a className="navbarBtn" href="/#team">
              <button className="btn navbarBtn">Team</button>
            </a>
          </li>
          <li>
            <a className="navbarBtn" href="/#sponsor">
              <button className="btn navbarBtn">Sponsor</button>
            </a>
          </li>
          <li>
            <a className="navbarBtn" href="/#reach">
              <button className="btn navbarBtn">Reach</button>
            </a>
          </li>
          <Link to="/login">
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
        <div className="home-lottie-animation">
          <Lottie options={defaultOptions} height={"100vh"} width={"100%"} />
        </div>
        <div className="mainShowcase-heading">
          <span className="mainShowcase-heading-welcome-color font-demi">
            welcome to
          </span>{" "}
          <span className="font-bold">Zealicon</span>
        </div>
        <div className="mainShowcase-button-wrapper">
          <Link to="/register" className="text-decoration-none">
            <div className="mainShowcase-button font-bold text-white">
              REGISTER NOW
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
