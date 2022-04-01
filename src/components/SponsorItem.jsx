import React from 'react'

export default function SponsorItem({img, className}) {
  return (
    <div className={`col-xl-2 col-lg-4 col-md-4 col-sm-6 center ${className}`}>
        <div className='box center'>
        <img src={img} alt={'sponsorImg'} />
        </div>
    </div>
  )
}
