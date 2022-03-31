import React from "react";
import BackgrounImage from "../../assets/image/Background.png";
import "./style.css";
const Home = () => {
  return (
    <div className="mainShowcase-wrapper">
      <div className="mainShowcase">
        <img
          className="mainShowcase-image"
          src={BackgrounImage}
          alt="Zealicon"
        />
        <div className="mainShowcase-heading font-bold">
          <span className="mainShowcase-heading-welcome-color font-demi">welcome to</span>{" "}
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
