import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { uploadAllVideo } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function Add({setUploadVideoStatus}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [Video,setVideo]= useState({
    id:"",
    caption:"",
    url:"",
    embededLink:""
  })
  //youtube video link
  const embededVideoLink = (e)=>{
    const {value} = e.target;
    const link =`https://www.youtube.com/embed/${value.slice(-11)}`
    setVideo({...Video,embededLink:link})
  }
// upload video 
  const handleUpload = async() =>{
    const {id,caption,url,embededLink} = Video;
    if(!id || !caption || !url || !embededLink){
      toast.warning("please fill the form completly")
    }
    else{
      const responce = await uploadAllVideo(Video);
      console.log(responce);
      if(responce.status === 201){
        toast.success(`${responce.data.caption} is succussfully uploaded`)
        setUploadVideoStatus(responce.data)
        handleClose();
      } 
    }
  }
 
  return (
    <div>
      <div className='d-flex align-items-center'>
        <button style={{fontFamily:'-moz-initial'}} className='btn btn-primary'>Upload New Video <i class="fa-solid fa-cloud-arrow-up ms-2" onClick={handleShow}></i></button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ fontSize: '23px' }}><i class="fa-solid fa-film text-primary me-2"></i> Upload New Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p style={{fontFamily:"-moz-initial"}}>Please fill the following details</p>
          <Form className='border border-secondary p-3 rounded'>
            <Form.Group className="mb-3 " >
              <Form.Control type="text" placeholder="Enter Video Id" onChange={(e)=>setVideo({...Video,id:e.target.value})}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Video Caption" onChange={(e)=>setVideo({...Video,caption:e.target.value})}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Video Image Url" onChange={(e)=>setVideo({...Video,url:e.target.value})}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Youtube Video Link" onChange={(e)=>embededVideoLink(e)}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={2000}></ToastContainer>
    </div>
  )
}

export default Add