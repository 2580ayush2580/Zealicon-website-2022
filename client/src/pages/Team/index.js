import React from "react";
import TeamMember from "../../components/TeamMember";
import Team1 from "../../../src/assets/team/team-1.png";
import Team2 from "../../../src/assets/team/team-2.png";
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
import Team17 from "../../../src/assets/team/team-17.png";
import Team18 from "../../../src/assets/team/team-18.png";
import Team19 from "../../../src/assets/team/team-19.png";
import Team20 from "../../../src/assets/team/team-20.png";
import Core1 from "../../../src/assets/team/core-1.png";
import Core2 from "../../../src/assets/team/core-2.png";


export default function Team() {
  return (
    <div id="team" className="fullscreen team p-100">
      <div className="font-bold font-36 text-white text-center">TEAM</div>
      <div className="my-5 px-0 container">
        <div class="row justify-content-center row-cols-lg-4 row-cols-sm-2 row-cols-1 gy-4">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <img src={Core2} alt="img" className={`team-member`} />
            <div className='mt-4 text-white font-18 text-center'>
              <div className='font-bold'>Dr. Mamatha T G</div>
              <div className='font-demi'>Principal</div>
            </div>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <img src={Core1} alt="img" className={`team-member`} />
            <div className='mt-4 text-white font-18 text-center'>
              <div className='font-bold'>{'Dr. Prashant Chauhan'}</div>
              <div className='font-demi'>{'Convener'}</div>
            </div>
          </div>
        </div>

        <div class="row gy-5 mt-0">
          <TeamMember
            img={Team1}
            name={"Prajwal s s"}
            designation={'Fest Secretary'}
          />
          <TeamMember
            img={Team8}
            name={"Nitin"}
            designation={'Co-Fest Secretary'}
          />
          <TeamMember
            img={Team16}
            name={"Varun"}
            designation={'Resource Head'}
          />
          <TeamMember
            img={Team7}
            name={'Dheeraj Kotwani'}
            designation={'Technical Head'}
          />
          <TeamMember
            img={Team5}
            name={"Prateek"}
            designation={'Security Head'}
          />
          <TeamMember
            img={Team6}
            name={'Abhay Pandey'}
            designation={'Co-Security Head'}
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
            img={Team18}
            name={"Priyanshu Singh"}
            designation={"Production Head"}
          />
          <TeamMember
            img={Team15}
            name={"Ajitesh Tripathi"}
            designation={"Artist Head"}
          />
          <TeamMember
            img={Team17}
            name={"Abhay Singh Bhadauria"}
            designation={"Finance Head"}
          />
          <TeamMember
            img={Team13}
            name={"Prince"}
            designation={"Merchandise Head"}
          />
          <TeamMember
            img={Team19}
            name={"Aditya"}
            designation={"Merchandise Head"}
          />
          <TeamMember
            img={Team12}
            name={"Ananya Singh"}
            designation={"Sponsorship Head"}
          />
          <TeamMember
            img={Team20}
            name={"Arijit Singh"}
            designation={"Sponsorship Head"}
          />
        </div>
      </div>
    </div>
  );
}
