import React from "react";
import Carousel from "react-bootstrap/Carousel";
import About1 from "../../assets/image/about1.jpg";
import About2 from "../../assets/image/about2.jpg";
export default function About() {
  return (
    <div id="about" className=" about p-5">
      <div className="font-bold font-36 text-primaryColor text-center">
        ABOUT
      </div>
      <div className="font-demi font-18 text-primaryColor justify mt-5 about-content">
        <div className="about-content-left">
          <p className="">
            Zealicon is the annual techno-cultural festival of JSSATE, Noida.
            Dedicated to the celebration of creativity and science, it is a
            stimulating event brimming with youthful dynamism. It transforms the
            campus into a veritable kaleidoscope of people. Involving
            multifarious exciting events from technical scratch to cultural
            zeal. A platform for all the creative minds to express their ideas
            in the form of events including band performances, discussions, film
            screenings that are spread over four days. Apart from the exuberant
            cultural events, Zealicon is also known for its mind boggling
            technical events that creates an ambience for the technocrats.
          </p>
          <p className="mt-4 ">
            Zealicon 2019 will cover the aspects of hysterical face of
            literature along with popular arts, science and technology. This
            edition of Zealicon promises all the trademarks of the earlier
            versions. A plethora of events where academicians will vouch out
            their intellect and artists will showcase the best of art.
            Projecting the fictitious gesture onto the real world, Zealicon will
            act as a connecting link between the fantasy and reality. Creating
            an aura of avidity and togetherness, We hope that Zealicon 2019 will
            turn out to be a memorable experience for you !
          </p>
        </div>
        <div className="about-content-right">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block aboutImage"
                src={About1}
                alt="First slide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block aboutImage"
                src={About2}
                alt="Second slide"
              />

              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
