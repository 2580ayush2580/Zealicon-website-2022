import React from "react";
import "./style.css";
const EventCard = (props) => {
  return (
    <div className="eventCard">
      <img className="eventCardImage" src={props.src} alt="Event" />
    </div>
  );
};

export default EventCard;
