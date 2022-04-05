import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ForgotPassword() {
    const [email, setEmail] = useState(null)
    const handleChange = (e) => {
        setEmail(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email)
    }
  return (
    <div className='fullscreen login p-100 d-flex justify-content-center align-items-center text-white font-48'>
      <div className='form-bg'>
          <div className='font-bold font-30 text-white'>Reset Password</div>
          <form onSubmit={handleSubmit}>
                <div className='d-flex flex-column mt-4'>
                    <div className='font-regular font-16 text-labelColor'>Enter Email</div>
                    <input onChange={handleChange} name='email' className='input-container font-regular font-14 text-white mt-1' type={'email'} placeholder={'John.snow@gmail.com'} />
                </div>
                <div className='font-regular font-16 text-formColor justify mt-4'>Enter your email address and we'll send you a link to create a new password.</div>
                <Link to='/reset-password' className='text-decoration-none'>
                    <div className='d-flex justify-content-center'>
                        <input className='input-btn mt-5 font-bold text-white font-18' type={'submit'} value="SEND LINK" />
                    </div>
                </Link>
          </form>
      </div>
    </div>
  )
}
