import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchZealID } from '../../redux/api'
import gluedImg from '../../assets/image/glued.png'
import wowImg from '../../assets/image/wow.png'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ZealiconLogo from "../../assets/image/zealicon-logo.svg";

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
          if(result.zeal_id === null){
              history('/register')
          }
          setDetails({
              ...details,
              fullname: result.fullname,
              zeal_id: result.zeal_id
          })
      }
      fetch()
  }, [])

    if(!localStorage.getItem("admission_number")){
      console.log(1)
        history('/register')
        return;
    }

    if(localStorage.getItem("admission_number") === undefined){
      history('/register')
        localStorage.clear()
        return;
    }
    


    const handleLogout = () => {
        localStorage.clear()
    }

  return (
      <div className='login'>
    <Navbar
    className="navbar-bg navbar-dark custom-navbar navbar-height"
    bg="light"
    expand="lg"
  >
    <Container>
      <Navbar.Brand href="/" className="mr-auto">
        <img className="ZealiconLogo" src={ZealiconLogo} alt="Zealicon" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/events" className="d-flex justify-content-end w-100">
              <Link className="text-decoration-none" to='/login' onClick={handleLogout}>
                <span className="font-regular font-18"><span className="navbar-text font-demi">&nbsp;Logout</span></span> 
              </Link>
            </Nav.Link>
          </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    <div className="nav-fullscreen d-flex flex-column justify-content-center align-items-center text-white font-48">
        <div className='font-bold font-44 text-nameColor'>Hey {details.fullname},</div>
        <div className='font-bold font-56 text-white text-center justify'>Your Zealicon ID is</div>
        <div className="zeal-bg mx-2 text-center">
            <div className="font-demi font-36 text-white">{details.zeal_id}</div>
        </div>
        <div className='font-demi font-30 text-white text-center justify'>Collect your coupons from<br /> Registration Desk</div>
        <div className='font-demi font-24 text-white text-center justify'>For Queries Contact:<br /> Prajwal (9667935559) , Ayushman (6388443417)</div>
        <div className='d-flex flex-md-row flex-column w-full mt-4'>
            <div className="mx-2 text-center mt-2">
                <img src={gluedImg} alt="" className='img-fluid mx-0 coupon' />
            </div>
            <div className="mx-2 text-center mt-2">
                <img src={wowImg} alt="" className='img-fluid mx-0 coupon' />
            </div>
        </div>
    </div>
    </div>
  )
}
