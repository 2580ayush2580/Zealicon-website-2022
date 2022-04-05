import React from 'react'

export default function Paynow() {
    const handleSubmit = (e) => {}
  return (
    <div className="fullscreen login p-100 d-flex justify-content-center align-items-center text-white font-48">
      <div className="form-bg">
        <div className="font-bold font-30 text-white text-center">Paynow</div>
        <form onSubmit={handleSubmit}>
            <div className="d-flex justify-content-center">
                <input
                className="input-btn mt-4 font-bold text-white font-18"
                type={"submit"}
                value="Pay Now"
                />
            </div>
        </form>
        </div>
    </div>

  )
}
