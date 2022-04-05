import React, { useState } from 'react'

export default function ContactUs() {
    const [user, setUser] = useState({
        name: '',
        email: '',
        message: ''
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
    <div className='fullscreen policy p-75 px-5'>
      <div className='font-bold font-36 text-white text-center'>CONTACT US</div>
      <div className='font-demi font-18 text-center text-policyColor mt-4'>Feel free to contact us, in case of any queries.</div> 
      <div className='center mt-5'>
        <div className='form-bg'>
            <form onSubmit={handleSubmit}>
                    <div className='d-flex flex-column'>
                        <div className='font-regular font-16 text-labelColor'>Your name</div>
                        <input onChange={handleChange} name='name' className='input-container font-regular font-14 text-white mt-1' type={'text'} placeholder={'John Snow'} />
                    </div>
                    <div className='d-flex flex-column'>
                        <div className='font-regular font-16 text-labelColor mt-4'>Your email</div>
                        <input onChange={handleChange} name='email' className='input-container font-regular font-14 text-white mt-1' type={'email'} placeholder="John.snow@gmail.com" />
                    </div>
                    <div className='d-flex flex-column'>
                        <div className='font-regular font-16 text-labelColor mt-4'>Type your message here</div>
                        <textarea onChange={handleChange} name='message' className='input-container font-regular font-14 text-white mt-1' type={'text'} placeholder="John.snow@gmail.com" />
                    </div>
                    <div className='d-flex justify-content-center'>
                        <input className='input-btn mt-5 font-bold text-white font-18' type={'submit'} value="SEND" />
                    </div>
            </form>
        </div>
      </div>
    </div>
  )
}
