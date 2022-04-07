import React from "react";
import { Link } from "react-router-dom";
import addIcon from "../../assets/bg/AddIcon.svg";
import findIcon from "../../assets/bg/findIcon.svg";

export default function ZealIDPage() {
  return (
    <div className="fullscreen login p-100 d-flex flex-sm-row flex-column justify-content-center align-items-center text-white font-48">
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
  );
}
