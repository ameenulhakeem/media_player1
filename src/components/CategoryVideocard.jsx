import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {  deleteVideoFromCategory } from '../services/allAPI';

function CategoryVideocard({ displayVideo}) {
   

  const removeVideo = async (id) => {
    const response = await deleteVideoFromCategory(id);
    console.log(response);
    
  }

  return (
    <div>
      <Card style={{ width: '100%', fontFamily:'-moz-initial' }} className='mx-3 my-2' > 
        <Card.Img style={{ height: "80px", width:"50px"}} variant="top" src={displayVideo.url}/>
        {/* <Card.Body>
          <div className='d-flex justify-content-between'>
            <Card.Text className='fs-6'>
              {displayVideo.caption}
            </Card.Text>
          </div>
        </Card.Body> */}
        {/* <Button variant="secondary" onClick={() => removeVideo(displayVideo.id)}><i class="fa-solid fa-trash fa-2xs "></i></Button> */}
      </Card>
      
    </div>
  )
}

export default CategoryVideocard
