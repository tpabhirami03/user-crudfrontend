import React from 'react'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { addUser } from '../services/allapi';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import {  toast } from 'react-toastify';

import { Link } from 'react-router-dom';
import { User } from 'react-feather';




function Add({ handleRes}) {

    const [uploadData, setuploadData] = useState({
        id: "", name: "", phone: "", image: "",email: ""
      })
    
      const [show, setShow] = useState(false);
    
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

      const setInput = (e) => {
      
        const {name,value}=e.target

        setuploadData({ ...uploadData, [name]: value })

       

      }

      console.log(uploadData);




      // define handleAdd api call

      const handleAdd = async () => {

        const { id, name, phone, image, email } = uploadData
    if (!id || !name || !phone || !image  || !email) {


      alert('please fill the form completely')
    }
    else {

        //  make an api call

      const response = await addUser(uploadData)

      alert('user added successfully')

      console.log(response);

      // if (response.status >= 200 && response.status < 300) {

      // handleRes(response.data)

      // }
    }}
    

  

  return (
    <>

     <div>
  
     <Button onClick={handleShow} id='btn1' variant="danger" style={{marginTop:'5%'}}>Add User <User/></Button>
     
     </div>

     <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >

<Modal.Header closeButton>
          <Modal.Title>Upload User Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FloatingLabel className='mb-3' controlId="floatingId" label="Uploading user id">
              <Form.Control type="text" placeholder="user id" name="id" onChange={setInput} />
            </FloatingLabel>

            <FloatingLabel className='mb-3' controlId="floatingCaption" label="Uploading user name">
              <Form.Control type="text" placeholder="user name" name="name" onChange={setInput}/>
            </FloatingLabel>

            <FloatingLabel className='mb-3' controlId="floatingImage" label="Uploading user phone">
              <Form.Control type="text" placeholder="user phone" name="phone" onChange={setInput}  />
            </FloatingLabel>

            <FloatingLabel className='mb-3' controlId="floatingLink" label="Uploading user image">
              <Form.Control type="text" placeholder="user image Link" name="image" onChange={setInput}  />         
            </FloatingLabel>

            <FloatingLabel className='mb-3' controlId="floatingLink" label="Uploading user email">
              <Form.Control type="text" placeholder="email" name="email" onChange={setInput} />
            </FloatingLabel>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleAdd} variant="primary">Add</Button>
        
        </Modal.Footer>
      </Modal>
     

    </>
    
  )
}

export default Add