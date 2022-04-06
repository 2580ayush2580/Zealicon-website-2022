import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchZealID } from '../../redux/api'

export default function UserPage() {
    const history = useNavigate()
    const [details, setDetails] = useState({
        first_name: '',
        last_name: '',
        zeal_id: ''
    })
    
    useEffect(() => {
        const fetch = async () => {
            const result = await fetchZealID()
            setDetails({
                ...details,
                first_name: result.first_name,
                last_name: result.last_name,
                zeal_id: result.zeal_id
            })
        }
        fetch()
    }, [])
  return (
    <div className="fullscreen login p-100 d-flex flex-column justify-content-center align-items-center text-white font-48">
        <div className="form-bg mx-2 text-center">
            <div className="font-bold font-30 text-white">{details.zeal_id}</div>
            <div className="font-bold font-24 text-white mt-4">{`${details.first_name} ${details.last_name}`}</div>
        </div>
        <div className='d-flex flex-row-lg flex-column w-full mt-4'>
            <div className="form-bg mx-2 text-center mt-2">
                <div className="font-bold font-36 text-white">WOW</div>
            </div>
            <div className="form-bg mx-2 text-center mt-2">
                <div className="font-bold font-36 text-white">GLUED</div>
            </div>
        </div>
    </div>
  )
}
