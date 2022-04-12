import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { fetchZealID, loginZeal } from "../../redux/api";
import { Container, Nav, Navbar } from "react-bootstrap";
import ZealiconLogo from "../../assets/image/zealicon-logo.svg";

export default function Login() {
  let history = useNavigate();

  const initialState = {
    query: "",
  };

  if(localStorage.getItem("admission_number")){
    localStorage.clear()
  }


  const [user, setUser] = useState(initialState);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let result = await fetchZealID(user.query)
    if(!result.zeal_id){
      history('/register')
    } else {
      history('/user')
    }
  };

  return (
    <div className="login ">
      <Navbar
        className="navbar-bg navbar-dark custom-navbar navbar-height"
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
                <Nav.Link href="/events" className="d-flex justify-content-end w-100 px-4">
                  <Link className="text-decoration-none" to='/register'>
                    <span className="font-regular font-18"><span className="text-nameColor">New Here?</span><span className="navbar-text font-demi">&nbsp;Register Now</span></span> 
                  </Link>
                </Nav.Link>
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="nav-fullscreen p-100 d-flex justify-content-center align-items-center text-white font-48">
      <div className="form-bg">
        <div className="font-bold font-30 text-white">Sign in</div>
        <form onSubmit={handleSubmit}>
          <div className="d-flex flex-column">
            <div className="font-regular font-16 text-labelColor mt-3">
              Email / Phone / Admission No
            </div>
            <input
              onChange={handleChange}
              name="query"
              className="input-container font-regular font-14 text-white mt-1"
              type={"text"}
              placeholder={"Xyz..."}
            />
          </div>
          <div className="d-flex justify-content-center">
            <input
              className="input-btn mt-5 font-bold text-white font-18"
              type={"submit"}
              value="SIGN IN"
            />
          </div>
        </form>
      </div>
    </div>
    </div>
    
  );
}
