import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { generateOrder, handleFeildsCheck, makePayment } from "../../redux/api";
import { Link } from "react-router-dom";
import ZealiconLogo from "../../assets/image/zealicon-logo.svg";
import validator from "validator";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
export default function Signup() {
  const initialData = {
    full_name: "",
    contact_no: "",
    email: "",
    admission_no: "",
    college: "",
  };

  if(localStorage.getItem("admission_number")){
    localStorage.clear()
  }

  const [user, setUser] = useState(initialData);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  let history = useNavigate();

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    console.log(res);
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    // function of razorpay
    const result = await generateOrder();
    console.log("RESULTS: ", result);
    if (!result) {
      alert("Server error. Are you online?");
      return;
    }

    const { key_id, amount, order_id, server_order_id } = result;

    const options = {
      key: key_id, // Enter the Key ID generated from the Dashboard
      amount: amount.toString(),
      currency: "INR",
      name: "Zealicon 2022 ",
      description: "Zealicon registration fees",
      order_id: order_id,
      handler: async function (response) {
        console.log(response);
        const data = {
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_order_id: response.razorpay_order_id,
          razorpay_signature: response.razorpay_signature,
          server_order_id,
          fullname: user.full_name,
          contact_no: user.contact_no,
          college: user.college,
          admission_no: user.admission_no.toUpperCase(),
          email: user.email,
        };
        console.log(data)
        const result = await makePayment(data);
        console.log("result", result);
        if (result.email) {
          history("/user");
        } else {
          history("/register");
          toast.dark("Payment Failed", {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      },
      theme: {
        color: "#7632CB",
        backdrop_color: "#231F2C",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (validator.isEmail(user.email)) {
      if (
        validator.isMobilePhone(user.contact_no) &&
        user.contact_no.length === 10
      ) {
        let handler = await handleFeildsCheck(user)
        if(handler.message){
          toast.dark("Do not refresh while paying", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setTimeout(() => {
            displayRazorpay();
          }, 3000)
        }
        toast.dark(`${handler[1][0]}`, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      } else {
        alert("Enter valid Contact!");
      }
    } else {
      alert("Enter valid Email!");
    }

  };

  return (
    <div className="login">
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
            <Nav>
              <Nav.Link
                href="/events"
                className="d-flex justify-content-end w-100"
              >
                <Link className="text-decoration-none" to="/login">
                  <span className="font-regular font-18">
                    <span className="text-nameColor">Already Registered?</span>
                    <span className="navbar-text font-demi">&nbsp;Sign In</span>
                  </span>
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    <div className="nav-fullscreen d-flex justify-content-center align-items-center text-white font-48">
      <div className="form-bg">
        <div className="font-regular font-16 text-white">Welcome</div>
        <div className="font-bold font-30 text-white">Registrations are closed!</div>
        {/* <form onSubmit={handleSubmit}>
          <div className="d-flex flex-column">
            <div className="font-regular font-16 text-labelColor mt-4">
              Full name
            </div>
            <input
              onChange={handleChange}
              name="full_name"
              className="input-container font-regular font-14 text-white mt-1"
              type={"text"}
              placeholder={"John"}
            />
          </div>
          <div className="d-flex flex-column">
            <div className="font-regular font-16 text-labelColor mt-2">
              Phone
            </div>
            <input
              onChange={handleChange}
              name="contact_no"
              className="input-container font-regular font-14 text-white mt-1"
              type={"text"}
              placeholder="8923xx2234"
            />
          </div>
          <div className="d-flex flex-column">
            <div className="font-regular font-16 text-labelColor mt-2">
              Email
            </div>
            <input
              onChange={handleChange}
              name="email"
              className="input-container font-regular font-14 text-white mt-1"
              type={"email"}
              placeholder="John.snow@gmail.com."
            />
          </div>
          <div className="d-flex flex-column">
            <div className="font-regular font-16 text-labelColor mt-2">
              College
            </div>
            <input
              onChange={handleChange}
              name="college"
              className="input-container font-regular font-14 text-white mt-1"
              type={"text"}
              placeholder="JSSATE Noida"
            />
          </div>
          <div className="d-flex flex-column">
            <div className="font-regular font-16 text-labelColor mt-2">
              Admission Number
            </div>
            <input
              onChange={handleChange}
              name="admission_no"
              className="input-container font-regular font-14 text-white mt-1"
              type={"text"}
              placeholder="19IT012"
            />
          </div>
            <div className="d-flex justify-content-center">
              <input
                className="input-btn mt-5 font-bold text-white font-18"
                type={"submit"}
                value="REGISTER NOW"
              />
            </div>
          </form> */}
        </div>
      </div>
    </div>
  );
}
