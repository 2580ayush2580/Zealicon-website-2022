import React from "react";
import EventCard from "../../components/EventCard";
import TestImage from "../../assets/image/event-card1.jpg";
import Slider from "react-slick";
export default function Events() {
  const settings = {
    className: "center variable-width",
    centerMode: true,
    infinite: true,
    centerPadding: "20px",
    slidesToShow: 4,
    speed: 500,
    variableWidth: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          centerPadding: "80px",
          slidesToShow: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className="fullscreen default event-page">
      <div className="font-bold font-36 text-white text-center">EVENTS</div>
      <div className="my-5">
        <Slider {...settings}>
          <EventCard src={TestImage} />
          <EventCard />
          <EventCard src={TestImage} />
          <EventCard />
          <EventCard src={TestImage} />
          <EventCard />
        </Slider>
      </div>
    </div>
  );
}
