import React from "react";
import TeamMember from "../../components/TeamMember";
import Team1 from "../../../src/assets/image/team/team-1.jpeg";
import Team2 from "../../../src/assets/image/team/team-2.jpeg";
import Team3 from "../../../src/assets/image/team/team-3.jpeg";
import Team4 from "../../../src/assets/image/team/team-4.jpeg";
import Team5 from "../../../src/assets/image/team/team-5.jpeg";
import Team6 from "../../../src/assets/image/team/team-6.jpeg";
import Team7 from "../../../src/assets/image/team/team-7.jpeg";
import Team8 from "../../../src/assets/image/team/team-8.jpeg";
import Team9 from "../../../src/assets/image/team/team-9.jpeg";
import Team10 from "../../../src/assets/image/team/team-10.jpeg";
import Team11 from "../../../src/assets/image/team/team-11.jpeg";
import Team12 from "../../../src/assets/image/team/team-12.jpeg";
import Team13 from "../../../src/assets/image/team/team-13.jpg";
import Team14 from "../../../src/assets/image/team/team-14.jpg";

export default function Team() {
  const name = ["Name"];
  const designation = ["Designation"];
  return (
    <div id="team" className="fullscreen team p-100">
      <div className="font-bold font-36 text-white text-center">TEAM</div>
      <div className="mt-5 px-5 container">
        <div class="row row-cols-lg-4 row-cols-1 gy-4">
          <div></div>
          <TeamMember
            img={Team12}
            name={"Prajwal s s"}
            designation={"Fest Secretary"}
            className="bg-1"
          />
          <TeamMember
            img={Team1}
            name={name}
            designation={designation}
            className="bg-1"
          />
          <div></div>
        </div>

        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 gx-5 gy-4 team-row">
          <TeamMember
            img={Team4}
            name={"Varun"}
            designation={designation}
            className="bg-3"
          />
          <TeamMember
            img={Team5}
            name={name}
            designation={designation}
            className="bg-4"
          />
          <TeamMember
            img={Team6}
            name={"Pratik"}
            designation={designation}
            className="bg-5"
          />
          <TeamMember
            img={Team7}
            name={"Utkarsh Panwar"}
            designation={"Management Head"}
            className="bg-1"
          />
        </div>

        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 gx-5 gy-4 team-row">
          <TeamMember
            img={Team8}
            name={name}
            designation={designation}
            className="bg-2"
          />
          <TeamMember
            img={Team9}
            name={name}
            designation={designation}
            className="bg-3"
          />
          <TeamMember
            img={Team10}
            name={name}
            designation={designation}
            className="bg-4"
          />
          <TeamMember
            img={Team11}
            name={name}
            designation={designation}
            className="bg-5"
          />
        </div>

        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 gx-5 gy-4 team-row">
          <TeamMember
            img={Team2}
            name={name}
            designation={designation}
            className="bg-3"
          />
          <TeamMember
            img={Team3}
            name={"Hemant"}
            designation={"Decoration Head"}
            className="bg-4"
          />
          <TeamMember
            img={Team13}
            name={"Ananya Singh"}
            designation={"Sponsorship Head"}
            className="bg-5"
          />
          <TeamMember
            img={Team14}
            name={"Prince"}
            designation={"Merchandise Head"}
            className="bg-1"
          />
        </div>
      </div>
    </div>
  );
}
