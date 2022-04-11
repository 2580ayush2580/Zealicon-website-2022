import React from 'react'

export default function TeamMember({name, designation, img}) {
  return (
    <div className='col-xl-3 col-md-4 col-sm-6 col-6 center'>
      <div className="d-flex flex-column justify-content-center align-items-center">
          <img src={img} alt="img" className='team-member img-fluid' />
          <div className='text-white font-18 text-center'>
              <div className='font-bold'>{name}</div>
              <div className='font-demi'>{designation}</div>
          </div>
      </div>
    </div>
  )
}
