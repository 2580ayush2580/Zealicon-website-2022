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
      </div>
    </div>
  );
};

export default Home;
