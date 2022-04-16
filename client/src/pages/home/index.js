import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import BackgrounImage from "../../assets/image/background.gif";
import ZealiconLogo from "../../assets/image/zealicon-logo.svg";
import CollegeLogo from "../../assets/image/jss.png";
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
      <div className="navbarCollege-wrapper">
        <div className="navbar-text navbarCollege">
          <div></div>
          <div className="navbarCollege-text">
            <div className=" font-18 font-demi">JSS Mahavidyapeetha</div>
            <div className="font-18 font-bold">
              JSS Academy of Technical Education
            </div>
            <div className="font-demi font-16">C-20/1, Sector-62, Noida</div>
          </div>
          <div>
            <img className="navbarCollegeLogo" src={CollegeLogo} alt="JSS" />
          </div>
        </div>
      </div>
      <div className="homeNavbar">
        <Navbar
          className="navbar-bg navbar-dark custom-navbar"
          bg="light"
          expand="lg"
        >
          <Container>
            <Navbar.Brand href="/">
              <img className="ZealiconLogo" src={ZealiconLogo} alt="Zealicon" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="https://play.google.com/store/apps/details?id=project.gdsc.zealicon22">
                  <span className="navbar-text font-demi">Zealicon App</span>
                </Nav.Link>
                <Nav.Link href="/#about">
                  <span className="navbar-text font-demi">About</span>
                </Nav.Link>
                <Nav.Link href="/#team">
                  <span className="navbar-text font-demi">Team</span>
                </Nav.Link>
                <Nav.Link href="/#sponsor">
                  <span className="navbar-text font-demi">Sponsor</span>
                </Nav.Link>
                <Nav.Link href="/#reach">
                  <span className="navbar-text font-demi">Reach</span>
                </Nav.Link>
                <Nav.Link href="/login">
                  <button className="btn navbar-btn">Sign in</button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
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
          <Link to="/zeal" className="text-decoration-none">
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
