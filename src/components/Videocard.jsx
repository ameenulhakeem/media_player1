import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { addToHistory, deleteVideo } from '../services/allAPI';

function Videocard({ displayVideo, setDeleteVideoStatus }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    // call function to store details to watch history
    const { caption, embededLink } = displayVideo
    console.log(caption);
    console.log(embededLink);
    const today = new Date;
    const timeStamp = new Intl.DateTimeFormat('en-us', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }).format(today)
    console.log(timeStamp);

    let videoDetails = {
      caption: caption,
      embededLink: embededLink,
      timeStamp: timeStamp
    }
    await addToHistory(videoDetails)
  };

  const removeVideo = async (id) => {
    // await deleteVideo(id).then(()=>{window.location.reload()});
    const response = await deleteVideo(id);
    console.log(response);
    setDeleteVideoStatus(true)
  }

  const dragStarted = (e,id) =>{
    console.log(`video card ${id} started dragging`);
    e.dataTransfer.setData("videoId",id)
  }

  return (
    <div>
      <Card style={{ width: '100%', fontFamily:'-moz-initial' }} className='my-3 ' draggable onDragStart={(e)=>dragStarted(e,displayVideo.id)}> 
        <Card.Img style={{ height: "270px" }} variant="top" src={displayVideo.url} onClick={handleShow} />
        <Card.Body>
          <div className='d-flex justify-content-between'>
            <Card.Text>
              {displayVideo.caption}
            </Card.Text>
            <Button variant="secondary" onClick={() => removeVideo(displayVideo.id)}><i class="fa-solid fa-trash fa-sm"></i></Button>
          </div>
        </Card.Body>
      </Card>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{displayVideo.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width="100%" height="500" src={displayVideo.embededLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Videocard
