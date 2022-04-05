import React, { useState } from 'react'

export default function Signup() {
  const [user, setUser] = useState({
    name: '',
    phone: '',
    email: '',
    admission: '',
    password: ''
  })

  const handleChange = (e) => {
      setUser({
          ...user,
          [e.target.name]: e.target.value
      })
  } 

  const handleSubmit = (e) => {
      e.preventDefault()
      console.log(user)
  }

  return (
    <div className='fullscreen login d-flex justify-content-center align-items-center text-white font-48'>
      <div className='form-bg'>
          <div className='font-regular font-16 text-white'>Welcome</div>
          <div className='font-bold font-30 text-white'>Register now</div>
          <form onSubmit={handleSubmit}>
                <div className='d-flex flex-column'>
                  <div className='font-regular font-16 text-labelColor mt-4'>Name</div>
                  <input onChange={handleChange} name='name' className='input-container font-regular font-14 text-white mt-1' type={'text'} placeholder={'John Snow'} />
                </div>
                <div className='d-flex flex-column'>
                  <div className='font-regular font-16 text-labelColor mt-3'>Phone</div>
                  <input onChange={handleChange} name='phone' className='input-container font-regular font-14 text-white mt-1' type={'text'} placeholder="8923xx2234" />
                </div>
                <div className='d-flex flex-column'>
                  <div className='font-regular font-16 text-labelColor mt-3'>Email</div>
                  <input onChange={handleChange} name='email' className='input-container font-regular font-14 text-white mt-1' type={'email'} placeholder="John.snow@gmail.com." />
                </div>
                <div className='d-flex flex-column'>
                  <div className='font-regular font-16 text-labelColor mt-3'>Admission Number</div>
                  <input onChange={handleChange} name='admission' className='input-container font-regular font-14 text-white mt-1' type={'text'} placeholder="ex: 19CSE001" />
                </div>
                <div className='d-flex flex-column'>
                  <div className='font-regular font-16 text-labelColor mt-3'>Create Password</div>
                  <input onChange={handleChange} name='password' className='input-container font-regular font-14 text-white mt-1' type={'password'} placeholder="Password.." />
                </div>
                <div className='d-flex justify-content-center'>
                    <input className='input-btn mt-5 font-bold text-white font-18' type={'submit'} value="REGISTER NOW" />
                </div>
          </form>
      </div>
    </div>
  )
}
