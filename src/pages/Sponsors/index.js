import React from "react";
import Sponsor1 from "../../../src/assets/image/sponsor/sponsor-1.svg";
import Sponsor2 from "../../../src/assets/image/sponsor/sponsor-2.svg";
import Sponsor3 from "../../../src/assets/image/sponsor/sponsor-3.svg";
import Sponsor4 from "../../../src/assets/image/sponsor/sponsor-4.svg";
import Sponsor5 from "../../../src/assets/image/sponsor/sponsor-5.svg";
import Sponsor6 from "../../../src/assets/image/sponsor/sponsor-6.svg";
import Sponsor7 from "../../../src/assets/image/sponsor/sponsor-7.svg";
import Sponsor8 from "../../../src/assets/image/sponsor/sponsor-8.svg";
import Sponsor9 from "../../../src/assets/image/sponsor/sponsor-9.svg";
import Sponsor10 from "../../../src/assets/image/sponsor/sponsor-10.svg";
import Sponsor11 from "../../../src/assets/image/sponsor/sponsor-11.svg";
import Sponsor12 from "../../../src/assets/image/sponsor/sponsor-12.svg";
import SponsorItem from "../../components/SponsorItem";

export default function Sponsors() {
  return (
    <div id="sponsor" className="fullscreen sponsor p-100">
      <div className="font-bold text-secondaryColor font-36 text-center">
        SPONSORS
      </div>
      <div className="mt-5 px-5 container">
        <div className="row row-cols-lg-6 row-cols-md-6 d-flex justify-content-around row-cols-3 gy-4">
          <SponsorItem img={Sponsor1} />
          <SponsorItem img={Sponsor2} />
          <SponsorItem img={Sponsor3} />
          <SponsorItem img={Sponsor4} />
          <SponsorItem img={Sponsor5} />
          <SponsorItem img={Sponsor6} />
        </div>

        <div className="row row-cols-lg-6 d-flex justify-content-around row-cols-2 gy-4 sponsor-row">
          <SponsorItem img={Sponsor7} />
          <SponsorItem img={Sponsor8} />
          <SponsorItem img={Sponsor9} />
          <SponsorItem img={Sponsor10} />
          <SponsorItem img={Sponsor11} />
          <SponsorItem img={Sponsor12} />
        </div>

        <div className="row row-cols-lg-6 d-flex justify-content-around row-cols-2 gy-4 sponsor-row">
          <SponsorItem img={Sponsor1} />
          <SponsorItem img={Sponsor2} />
          <SponsorItem img={Sponsor3} />
          <SponsorItem img={Sponsor4} />
          <SponsorItem img={Sponsor5} />
          <SponsorItem img={Sponsor6} />
        </div>
      </div>
    </div>
  );
}
