import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'; 
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigateByUrl = useNavigate()
  return (
    <div>
      <Navbar className="bg-body-tertiary bg-dark ">
        <Container>
          <Navbar.Brand href="#home" style={{color:"white",fontSize:"30px", fontFamily:'-moz-initial'}} onClick={(e)=>{navigateByUrl('/')}}>
            <i class="fa-solid fa-video text-primary me-2"></i> Media Player
            </Navbar.Brand>
            <div className=' fs-5'>
          <i class="fa-brands fa-instagram mx-3"></i>
          <i class="fa-brands fa-twitter mx-3"></i>
          <i class="fa-brands fa-linkedin mx-3"></i>
          <i class="fa-brands fa-facebook mx-3"></i>
          <i class="fa-brands fa-youtube mx-3"></i>
          </div>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header