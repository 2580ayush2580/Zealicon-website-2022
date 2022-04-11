import React from "react";
import Sponsor1 from "../../../src/assets/image/sponsor/sponsor1.png";
import Sponsor2 from "../../../src/assets/image/sponsor/sponsor2.png";
import Sponsor3 from "../../../src/assets/image/sponsor/sponsor3.png";
import Sponsor4 from "../../../src/assets/image/sponsor/sponsor4.png";
import Sponsor5 from "../../../src/assets/image/sponsor/sponsor5.png";
import Sponsor6 from "../../../src/assets/image/sponsor/sponsor6.png";
import SponsorItem from "../../components/SponsorItem";

export default function Sponsors() {
  return (
    <div id="sponsor" className="sponsor p-100">
      <div className="font-bold text-secondaryColor font-36 text-center">
        Some of our SPONSORS
      </div>
      <div className="my-5 px-5 container">
        <div className="row gy-4">
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
