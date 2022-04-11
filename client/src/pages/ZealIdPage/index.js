import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import addIcon from "../../assets/bg/AddIcon.svg";
import findIcon from "../../assets/bg/findIcon.svg";
import ZealiconLogo from "../../assets/image/zealicon-logo.svg";
import { Link } from "react-router-dom";

export default function ZealIDPage() {
  return (
    <div className="login">
    <Navbar
        className="navbar-bg navbar-dark custom-navbar"
        bg="light"
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="/" className="mr-auto">
            <img className="ZealiconLogo" src={ZealiconLogo} alt="Zealicon" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* <Nav className="me-auto">
              <Nav.Link href="/events">
                <span className="navbar-text font-demi"></span>
              </Nav.Link>
            </Nav> */}
              <Nav>
                <Nav.Link href="/events" className="d-flex justify-content-end w-100">
                  <Link className="text-decoration-none" to='/login'>
                    <span className="font-regular font-18"><span className="text-nameColor">Already Registered?</span><span className="navbar-text font-demi">&nbsp;Sign in</span></span> 
                  </Link>
                </Nav.Link>
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    <div className="nav-fullscreen p-100 d-flex flex-sm-row flex-column justify-content-center align-items-center text-white font-48">
      <Link to="/register" className="text-decoration-none">
        <div className="box-bg m-5 center flex-column">
          <img src={addIcon} alt="addIcon" className="img-fluid box-img mx-0" />
          <div className="font-demi font-20 text-white mt-4">
            Make your Zeal ID
          </div>
        </div>
      </Link>
      <Link to="/login" className="text-decoration-none">
        <div className="box-bg center flex-column">
          <img
            src={findIcon}
            alt="findIcon"
            className="img-fluid box-img mx-0"
          />
          <div className="font-demi font-20 text-white mt-4">
            Find your Zeal ID
          </div>
        </div>
      </Link>
    </div>
    </div>
  );
}
