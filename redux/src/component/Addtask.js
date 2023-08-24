import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export default function Addtask({show, handleClose}) {
    const[id,setid]=useState()
      const[description,setdescription]=useState("")
      const[isDone,setisDone]=useState("")
   
    const handleSubmit=()=>{
        var data={}
        data={
            id:id,
            description:description,
            isDone:isDone
        }
        localStorage.setItem("data",JSON.stringify(data))
          handleClose()
    }
  return (
    <>
    <Modal show={show} onHide={handleClose}>
         <Modal.Header closeButton>
           <Modal.Title>Modal heading</Modal.Title>
         </Modal.Header>
        <Modal.Body>
        <Form>
       <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>id</Form.Label>
         <Form.Control type="number" placeholder="Enter id"  onChange={(e)=>setid(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>description</Form.Label>
         <Form.Control type="text" placeholder="Enter description"  onChange={(e)=>setdescription(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>isDone</Form.Label>
         <Form.Control type="number" placeholder="Enter isDone"  onChange={(e)=>setisDone(e.target.value)}/>
      </Form.Group>
      </Form>
               </Modal.Body>
      <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
         </Button>
           <Button variant="primary" onClick={handleSubmit}>
             Add task
          </Button>
        </Modal.Footer>
</Modal>
    </>
  );
}

