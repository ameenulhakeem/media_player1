import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { deleteCategory, getAllCategory, getVideoDetails, updateCategory, uploadAllCategory } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Videocard from './Videocard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CategoryVideocard from './CategoryVideocard';

function Category() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [allCategory, setAllCategory] = useState([])
  const [deleteCategoryStatus, setDeleteCategoryStatus] = useState(false)
  const [uploadCategoryStatus, setUploadCategoryStatus] = useState(false)

  const [Category, setCategory] = useState({
    id: "",
    name: "",
    allVideos:[]
  })

  const uploadCategory = async () => {
    const { id, name } = Category;
    if (!id || !name) {
      toast.warning("please fill the form completely")
    }
    else {
      const response = await uploadAllCategory(Category);
      console.log(response);
      if (response.status === 201) {
        toast.success(`${response.data.name} is succussfully uploaded`)
        handleClose();
        setUploadCategoryStatus(true)
      }
    }
  }
  const getAllCategoryFromDB = async () => {
    const result = await getAllCategory();
    const { data } = result;
    setAllCategory(data)
  }
  useEffect(() => {
    getAllCategoryFromDB();
    setDeleteCategoryStatus(false)
    setUploadCategoryStatus(false)
  }, [deleteCategoryStatus, uploadCategoryStatus])

  const deleteCategoryItem = async (id) => {
    const response = await deleteCategory(id);
    setDeleteCategoryStatus(true)
  }

  const dragOver = (e)=>{
    e.preventDefault(); //to prevent page refresh, by default onDragover will do page refresh
    console.log("dragOver===");
  }
  const videoDrop = async(e,id)=>{
    // console.log(`videocard need to be placed in card with ${id}`);
    const videoId = e.dataTransfer.getData("videoId")
    // console.log(`video with id ${videoId} need to be placed in category with id ${id}`);
    const response = await getVideoDetails(videoId);
    const {data} = response
    // console.log("video details");
    // console.log(data);
    const selectedCategory = allCategory?.find((item)=>item.id=== id);
    // console.log("selected category",selectedCategory);
    selectedCategory.allVideos.push(data)
    // console.log("==selected category with draged video details==");
    // console.log(selectedCategory);
    await updateCategory(id,selectedCategory);
    getAllCategoryFromDB();

  }
  return (
    <div className='my-2 '>
      
      {
        allCategory.length > 0 ?
          allCategory.map((Category) => (
            <div className='d-grid 'droppable onDragOver={(e)=>dragOver(e)}
            onDrop={(e)=>videoDrop(e,Category.id)}
            >
              <div className='my-3 border border-secondary rounded p-3 pe-5'>
                <div className='d-flex justify-content-between align-items-center'>
                <h6>{Category.name}</h6>
                <Button variant="secondary" className='ms-3 py-1' onClick={() => deleteCategoryItem(Category.id)}><i class="fa-solid fa-trash fa-xs"></i></Button>

              </div>
              <Row>
                
                  {
                    Category.allVideos?.length > 0?
                    // Category.allVideos.map(video=>{<Videocard displayVideo={video}/>})
                    Category.allVideos.map((video)=>(
                      <Col sm={12} md={6} lg={4} xl={3}>
                          <CategoryVideocard displayVideo={video} />
                      </Col>
                    ))
                    :
                    <p>No item</p>
                  }
                
              </Row>
              </div>
            </div>
          ))
          :
          <p>nothing to display</p>
      }
      <div>
        <button className='btn btn-primary my-2 p-3' onClick={handleShow}>Add New Category</button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ fontSize: '23px' }}><i class="fa-solid fa-pencil text-primary me-2"></i>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p style={{ fontFamily: "-moz-initial" }}>Please fill the following details</p>
          <Form className='border border-secondary p-3 rounded'>
            <Form.Group className="mb-3 " >
              <Form.Control type="text" placeholder="Enter Category Id" onChange={(e) => setCategory({ ...Category, id: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Enter Category Name" onChange={(e) => setCategory({ ...Category, name: e.target.value })} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={uploadCategory}>Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={2000}></ToastContainer>
    </div>
  )
}

export default Category