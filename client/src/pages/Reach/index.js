import React from "react";
import "./style.css";
export default function Reach() {
  return (
    <div id="reach" className="reach-page">
      <div className="reach-page-left"></div>
      <div className="reach-page-right">
        <div className="font-bold text-secondaryColor font-36 text-center">
          REACH
        </div>
        <div className="reach-page-right-map">
          <iframe
            title="reach"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5220962430494!2d77.35658761561477!3d28.614110482425154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5992452d761%3A0xaaa44725147c1507!2sJSS%20Academy%20of%20Technical%20Education!5e0!3m2!1sen!2sin!4v1649067374436!5m2!1sen!2sin"
            width="100%"
            height="350"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="reach-page-right-text">
            <div>
              <div className="reach-page-right-text-heading font-bold mt-3">
                Dr. Prashant Chauhan
              </div>
              <div className="reach-page-right-text-normalText font-bold">
                Festival Convener
              </div>
              <div className="reach-page-right-text-normalText font-bold">
                zealicon@jssaten.ac.in
              </div>
            </div>
            <div>
              <div className="reach-page-right-text-heading font-bold mt-3">
                Prajwal Shirur
              </div>
              <div className="reach-page-right-text-normalText font-bold">
                Festival Convener
              </div>
              <div className="reach-page-right-text-normalText font-bold">
                zealicon@jssaten.ac.in
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
