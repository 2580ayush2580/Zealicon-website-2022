import React, { useState } from 'react'

export default function ResetPassword() {
    const [pass, setPass] = useState({
        newPass: '',
        confirmPass: ''
    })
    const handleChange = (e) => {
        setPass({
            ...pass,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(pass)
    }
  return (
    <div className='fullscreen login p-100 d-flex justify-content-center align-items-center text-white font-48'>
      <div className='form-bg'>
          <div className='font-bold font-30 text-white'>Reset Password</div>
          <form onSubmit={handleSubmit}>
                <div className='d-flex flex-column mt-4'>
                    <div className='font-regular font-16 text-labelColor'>New Password</div>
                    <input onChange={handleChange} name='newPass' className='input-container font-regular font-14 text-white mt-1' type={'password'} placeholder={'New Password'} />
                </div>
                <div className='d-flex flex-column mt-4'>
                    <div className='font-regular font-16 text-labelColor'>Confirm Password</div>
                    <input onChange={handleChange} name='confirmPass' className='input-container font-regular font-14 text-white mt-1' type={'password'} placeholder={'Confirm Password'} />
                </div>
                <div className='d-flex justify-content-center'>
                    <input className='input-btn mt-5 font-bold text-white font-18' type={'submit'} value="RESET PASSWORD" />
                </div>
          </form>
      </div>
    </div>
  )
}
