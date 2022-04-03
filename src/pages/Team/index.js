import React from "react";
import TeamMember from "../../components/TeamMember";
import Team1 from "../../../src/assets/team/team-1.svg";
import Team2 from "../../../src/assets/team/team-2.svg";
import Team3 from "../../../src/assets/team/team-3.svg";
import Team4 from "../../../src/assets/team/team-4.svg";
import Team5 from "../../../src/assets/team/team-5.svg";
import Team6 from "../../../src/assets/team/team-6.svg";
import Team7 from "../../../src/assets/team/team-7.svg";
import Team8 from "../../../src/assets/team/team-8.svg";
import Team9 from "../../../src/assets/team/team-9.svg";
import Team10 from "../../../src/assets/team/team-10.svg";
import Team11 from "../../../src/assets/team/team-11.svg";
import Team12 from "../../../src/assets/team/team-12.svg";
import Team14 from "../../../src/assets/team/team-13.svg";
import Team13 from "../../../src/assets/team/team-14.svg";

export default function Team() {
  const name = ["Name"];
  const designation = ["Designation"];
  return (
    <div id="team" className="fullscreen team p-100">
      <div className="font-bold font-36 text-white text-center">TEAM</div>
      <div className="my-5 px-5 container">
        <div class="row justify-content-center row-cols-lg-4 row-cols-sm-2 row-cols-1 gy-4">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <img src={Team1} alt="img" className={`team-member`} />
            <div className='mt-4 text-white font-18 text-center'>
              <div className='font-bold'>Prajwal s s</div>
              <div className='font-demi'>Fest Secretary</div>
            </div>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <img src={Team11} alt="img" className={`team-member`} />
            <div className='mt-4 text-white font-18 text-center'>
              <div className='font-bold'>{name}</div>
              <div className='font-demi'>{designation}</div>
            </div>
          </div>
        </div>

        <div class="row gy-5 mt-0">
          <TeamMember
            img={Team8}
            name={"Varun"}
            designation={designation}
          />
          <TeamMember
            img={Team6}
            name={name}
            designation={designation}
          />
          <TeamMember
            img={Team5}
            name={"Pratik"}
            designation={designation}
          />
          <TeamMember
            img={Team2}
            name={"Utkarsh Panwar"}
            designation={"Management Head"}
          />
          <TeamMember
            img={Team4}
            name={name}
            designation={designation}
          />
          <TeamMember
            img={Team9}
            name={name}
            designation={designation}
          />
          <TeamMember
            img={Team7}
            name={name}
            designation={designation}
          />
          <TeamMember
            img={Team3}
            name={name}
            designation={designation}
          />
          <TeamMember
            img={Team10}
            name={name}
            designation={designation}
          />
          <TeamMember
            img={Team14}
            name={"Hemant"}
            designation={"Decoration Head"}
          />
          <TeamMember
            img={Team12}
            name={"Ananya Singh"}
            designation={"Sponsorship Head"}
          />
          <TeamMember
            img={Team13}
            name={"Prince"}
            designation={"Merchandise Head"}
          />
        </div>
      </div>
    </div>
  );
}
