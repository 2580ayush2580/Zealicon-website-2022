import React from 'react'
import { Link } from 'react-router-dom'
import Zlogo from '../../../src/assets/image/zealicon-logo.svg'

export default function Footer() {
  return (
    <div className="footer-bg p-75">
      <div className='d-flex flex-lg-row flex-column align-items-start align-items-lg-center justify-content-around justify-content-lg-between font-demi font-18 text-white px-5'>
        <div>
          <img src={Zlogo} alt="logo" className='img-fluid mx-0'/>
        </div>
        <div className='d-flex'>
          <Link to='/terms' className='text-decoration-none mx-2'><div className='text-white'>Terms &amp; Conditions</div></Link>
          <Link to='/privacy' className='text-decoration-none mx-2'><div className='text-white'>Privacy Policy</div></Link>
          <Link to='/refund' className='text-decoration-none mx-2'><div className='text-white'>Refund Policy</div></Link>
        </div>
        <Link to='contact-us'>
        <div className='btn btn-light'>Get in touch</div>
        </Link>
      </div>
    </div>
  )
}
