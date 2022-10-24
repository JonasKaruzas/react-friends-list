import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';


export const AddFriendForm = (props) => {
  
  const initialFormState = {
    firstName: "",
    lastName: "",
    age: "",
    city: "",
  };

  const [form, setForm] = useState({ ...initialFormState });

  function formChangeHandler(e) {
    setForm({ ...form, [e.target.id]: e.target.value });
  }
  
  function onSubmit(e) {
    e.preventDefault();
    props.onSubmitHandler(form)
    setForm({ ...initialFormState });
  }

  return (
    <Form onSubmit={onSubmit}>
      <Row>
        <Col>
      <FloatingLabel controlId="firstName" label="Name" className="mb-3">
        <Form.Control type="text" placeholder="Jonas" onChange={formChangeHandler} value={form.firstName} required/>
      </FloatingLabel>
        </Col>
        <Col>
      <FloatingLabel controlId="lastName" label="Last name" className="mb-3">
        <Form.Control type="text" placeholder="Jonaitis" onChange={formChangeHandler} value={form.lastName} required/>
      </FloatingLabel>
        </Col>
      </Row>
      <Row>
        <Col>
      <FloatingLabel controlId="age" label="Age" className="mb-3">
        <Form.Control type="number" placeholder="33" onChange={formChangeHandler} value={form.age} required/>
      </FloatingLabel>
        </Col>
        <Col>
      <FloatingLabel controlId="city" label="City" className="mb-3">
        <Form.Control type="text" placeholder="Vilnius" onChange={formChangeHandler} value={form.city} required/>
      </FloatingLabel>
        </Col>
      </Row>
      <div className='d-grid'>
      <Button variant="warning" type="submit">
        {props.btnText}
      </Button>
      </div>
    </Form>
  );
}