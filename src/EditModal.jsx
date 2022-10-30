import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AddFriendForm } from "./AddFriendForm";

export function EditModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true)
    props.onEdit();
  };

  return (
    <>
      <Button variant='warning' size='sm' onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit your friends info</Modal.Title>
        </Modal.Header>
        <Modal.Body>         
           <AddFriendForm btnText='Save' onSubmitHandler={props.onEditSubmitHandler} editFormState={props.editFormState} closeModalHandler={handleClose}/>
          </Modal.Body>
      </Modal>
    </>
  );
}
