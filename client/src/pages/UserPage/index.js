import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchZealID } from '../../redux/api'
import gluedImg from '../../assets/image/glued.png'
import wowImg from '../../assets/image/wow.png'

export default function UserPage() {
    const history = useNavigate()
    const [details, setDetails] = useState({
        fullname: '',
        zeal_id: ''
    })
    
    useEffect(() => {
        let admission_no = localStorage.getItem('admission_number')
        const fetch = async () => {
            const result = await fetchZealID(admission_no)
            setDetails({
                ...details,
                fullname: result.fullname,
                zeal_id: result.zeal_id
            })
        }
        fetch()
    }, [])

    if(!localStorage.getItem("admission_number")){
        history('/register')
    }
  return (
    <div className="fullscreen login p-75 d-flex flex-column justify-content-center align-items-center text-white font-48">
        <div className='font-bold font-48 text-nameColor'>Hey {details.fullname},</div>
        <div className='font-bold font-68 text-white text-center justify'>Your Zealicon ID is</div>
        <div className="zeal-bg mx-2 text-center">
            <div className="font-demi font-36 text-white">{details.zeal_id}</div>
        </div>
        <div className='font-demi font-40 text-white text-center justify'>Collect your coupons from Registration Desk</div>
        <div className='d-flex flex-md-row flex-column w-full mt-4'>
            <div className="mx-2 text-center mt-2">
                <img src={gluedImg} alt="" className='img-fluid mx-0 coupon' />
            </div>
            <div className="mx-2 text-center mt-2">
                <img src={wowImg} alt="" className='img-fluid mx-0 coupon' />
            </div>
        </div>
    </div>
  )
}
