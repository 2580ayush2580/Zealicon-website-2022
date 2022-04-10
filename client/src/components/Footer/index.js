import React from "react";
import { Link } from "react-router-dom";
import Zlogo from "../../../src/assets/image/zealicon-logo.svg";

export default function Footer() {
  return (
    <div className="footer-bg p-5">
      <div className="footer-custom font-demi font-18 text-white">
        <div>
          <img src={Zlogo} alt="logo" className="img-fluid mx-0" />
        </div>
        <div className="footer-links">
          <Link to="/terms" className="text-decoration-none mx-3">
            <div className="text-white footer-links-margin">
              Terms &amp; Conditions
            </div>
          </Link>
          <Link to="/privacy" className="text-decoration-none mx-3">
            <div className="text-white footer-links-margin">Privacy Policy</div>
          </Link>
          <Link to="/refund" className="text-decoration-none mx-3">
            <div className="text-white footer-links-margin">Refund Policy</div>
          </Link>
        </div>
        <Link to="contact-us">
          <div className="btn btn-light my-2">Get in touch</div>
        </Link>
      </div>
    </div>
  );
}
