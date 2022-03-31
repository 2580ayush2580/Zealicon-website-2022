import React from 'react'
import TeamMember from '../../components/TeamMember'

export default function Team() {
  const name = ['Vaibhav Shukla']
  const designation = ['Designation']
  return (
    <div className='fullscreen team p-100'>
        <div className='font-bold font-36 text-white text-center'>
          TEAM
        </div>
        <div className='mt-5 px-5 container'>
          <div class="row row-cols-lg-4 row-cols-1 gy-4">
            <div></div>
            <TeamMember name={name} designation={designation} className="bg-1" />
            <TeamMember name={name} designation={designation} className="bg-2" />
            <div></div>
          </div>
          <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 gx-5 gy-4 team-row">
            <TeamMember name={name} designation={designation} className="bg-3" />
            <TeamMember name={name} designation={designation} className="bg-4" />
            <TeamMember name={name} designation={designation} className="bg-5" />
            <TeamMember name={name} designation={designation} className="bg-1" />
          </div>

          <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 gx-5 gy-4 team-row">
            <TeamMember name={name} designation={designation} className="bg-2" />
            <TeamMember name={name} designation={designation} className="bg-3" />
            <TeamMember name={name} designation={designation} className="bg-4" />
            <TeamMember name={name} designation={designation} className="bg-5" />
          </div>
        </div>
    </div>
  )
}
