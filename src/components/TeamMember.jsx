import React from 'react'
import teamImg from '../../src/assets/images/team-img.svg'

export default function TeamMember({name, designation, className = ''}) {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
        <img src={teamImg} alt="img" className={`team-member ${className}`} />
        <div className='mt-4 text-white font-18 text-center'>
            <div className='font-bold'>{name}</div>
            <div className='font-demi'>{designation}</div>
        </div>
    </div>
  )
}
