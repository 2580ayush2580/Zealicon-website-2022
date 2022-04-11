import React from "react";
import TeamMember from "../../components/TeamMember";
import Team1 from "../../../src/assets/team/team-1.png";
import Team2 from "../../../src/assets/team/team-2.png";
import Team3 from "../../../src/assets/team/team-3.png";
import Team4 from "../../../src/assets/team/team-4.png";
import Team5 from "../../../src/assets/team/team-5.png";
import Team6 from "../../../src/assets/team/team-6.png";
import Team7 from "../../../src/assets/team/team-7.png";
import Team8 from "../../../src/assets/team/team-8.png";
import Team9 from "../../../src/assets/team/team-9.png";
import Team10 from "../../../src/assets/team/team-10.png";
import Team11 from "../../../src/assets/team/team-11.png";
import Team12 from "../../../src/assets/team/team-12.png";
import Team14 from "../../../src/assets/team/team-13.png";
import Team13 from "../../../src/assets/team/team-14.png";
import Team15 from "../../../src/assets/team/team-15.png";
import Team16 from "../../../src/assets/team/team-16.png";


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
            <img src={Team8} alt="img" className={`team-member`} />
            <div className='mt-4 text-white font-18 text-center'>
              <div className='font-bold'>{'Nitin'}</div>
              <div className='font-demi'>{'Co-Fest Secretary'}</div>
            </div>
          </div>
        </div>

        <div class="row gy-5 mt-0">
          <TeamMember
            img={Team16}
            name={"Varun"}
            designation={'Resource Head'}
          />
          <TeamMember
            img={Team6}
            name={'Abhay Pandey'}
            designation={'Co-Security Head'}
          />
          <TeamMember
            img={Team5}
            name={"Prateek"}
            designation={'Security Head'}
          />
          <TeamMember
            img={Team2}
            name={"Utkarsh Panwar"}
            designation={"Management Head"}
          />
          <TeamMember
            img={Team9}
            name={'Ayushman Tripathi'}
            designation={'Management Head'}
          />
          <TeamMember
            img={Team4}
            name={'Divisha'}
            designation={'Creative Head'}
          />
          <TeamMember
            img={Team7}
            name={'Dheeraj Kotwani'}
            designation={'Technical Head'}
          />
          <TeamMember
            img={Team11}
            name={'Devansh Agarwal'}
            designation={'Cultural Head'}
          />
          <TeamMember
            img={Team10}
            name={'Shashank Rathor'}
            designation={'Marketing Head'}
          />
          <TeamMember
            img={Team14}
            name={"Hemant"}
            designation={"Photography Head"}
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
          <TeamMember
            img={Team15}
            name={"Prince"}
            designation={"Merchandise Head"}
          />
          {/* <TeamMember
            img={Team16}
            name={"Prince"}
            designation={"Merchandise Head"}
          /> */}
        </div>
      </div>
    </div>
  );
}
