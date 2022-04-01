import React from 'react'

export default function SponsorItem({img}) {
  return (
    <div className='box d-flex justify-content-center align-items-center'>
        <img src={img} alt={'sponsorImg'} />
    </div>
  )
}
