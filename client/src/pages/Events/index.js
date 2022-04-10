import React from "react";
import EventCard from "../../components/EventCard";
import Event1 from "../../assets/image/event1.jpg";
import Event2 from "../../assets/image/event2.jpg";
import Event3 from "../../assets/image/event3.jpg";
import Event4 from "../../assets/image/event4.jpg";
import Event5 from "../../assets/image/event5.jpg";
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
          <EventCard src={Event1} />
          <EventCard src={Event2} />
          <EventCard src={Event3} />
          <EventCard src={Event4} />
          <EventCard src={Event5} />
        </Slider>
      </div>
    </div>
  );
}
