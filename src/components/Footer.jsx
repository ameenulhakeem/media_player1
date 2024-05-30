import React from 'react'
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='bg-light py-4'>
      <div className='footer d-flex align-items-center justify-content-evenly w-100 mb-5 '>
        <div style={{ width: "400px" }}>
          <h5 style={{fontFamily:'-moz-initial'}}><i class="fa-solid fa-video text-primary me-2"></i> Media Player</h5>
          <h6 style={{fontFamily:'-moz-initial'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur quam architecto rem id aliquam, voluptatem, obcaecati exercitationem delectus veritatis possimus vitae beatae nemo magni dignissimos nulla dolore expedita explicabo perspiciatis.</h6>
        </div>
        <div style={{ width: "200px", fontFamily:'-moz-initial'}} >
          <h4>Links</h4>
          <Link to={'/'} style={{textDecoration:'none'}}>
          <h6>Landing Page</h6>
          </Link>
          <Link to={'/home'} style={{textDecoration:'none'}}>
          <h6>Home Page</h6>
          </Link>
         <Link to={'/history'} style={{textDecoration:'none'}}>
         <h6>Watch History</h6>
         </Link>  
        </div>
        <div style={{fontFamily:'-moz-initial'}}>
          <h4>Guids</h4>
          <h6>React</h6>
          <h6>React Bootstrap</h6>
          <h6>Bootswatch</h6>
        </div>
        <div style={{fontFamily:'-moz-initial'}}>
          <h4>Contact Us</h4>
          <Form className='d-flex'>
            <input type="email" placeholder='Enter Your Email' className='form-control'/>
            <button className=' btn btn-primary  ms-3 p-2 rounded'>Subscribe</button>
          </Form>
          <div className='d-flex justify-content-evenly mt-4 fs-4'>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-brands fa-facebook"></i>
          </div>
        </div>
      </div>
      <div className='text-center' style={{fontFamily:'-moz-initial'}}>
        <p>Copyright &#169; 2023 Media player. Built with React</p>
      </div>
    </div>
  )
}

export default Footer