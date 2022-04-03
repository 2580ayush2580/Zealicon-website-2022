import React, { useState } from 'react'

export default function Login() {
    const [user, setUser] = useState({
        email: '',
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
    <div className='fullscreen login p-100 d-flex justify-content-center align-items-center text-white font-48'>
      <div className='form-bg'>
          <div className='font-bold font-30 text-white'>Sign in</div>
          <form onSubmit={handleSubmit}>
                <div className='d-flex flex-column'>
                    <div className='font-regular font-16 text-labelColor mt-5'>Email</div>
                    <input onChange={handleChange} name='email' className='input-container font-regular font-14 text-white mt-1' type={'email'} placeholder={'asd'} />
                </div>
                <div className='d-flex flex-column'>
                    <div className='font-regular font-16 text-labelColor mt-4'>Password</div>
                    <input onChange={handleChange} name='password' className='input-container font-regular font-14 text-white mt-1' type={'password'} placeholder="Password.." />
                </div>
                <div className='d-flex justify-content-center'>
                    <input className='input-btn mt-5 font-bold text-white font-18' type={'submit'} value="SIGN IN" />
                </div>
          </form>
      </div>
    </div>
  )
}
