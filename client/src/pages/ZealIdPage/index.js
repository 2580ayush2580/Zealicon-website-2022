import React from 'react'
import { Link } from 'react-router-dom'

export default function ZealIDPage() {
  return (
    <div className="fullscreen login p-100 d-flex justify-content-center align-items-center text-white font-48">
        <Link to='/register' className='text-decoration-none'>
            <div className="form-bg mx-2 text-center">
                <div className="font-bold font-30 text-white">Make your Zeal ID</div>
            </div>
        </Link>
        <Link to='/login' className='text-decoration-none'>
            <div className="form-bg text-center">
                <div className="font-bold font-30 text-white">Find your Zeal ID</div>
            </div>
        </Link>
        
    </div>
  )
}
