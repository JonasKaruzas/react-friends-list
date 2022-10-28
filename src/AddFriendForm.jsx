import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './addFriendForm.css';

export const AddFriendForm = (props) => {
  
  const initialFormState = (
    props.editFormState ?
    props.editFormState :
    { firstName: "",
      lastName: "",
      city: "",
    }
  );

  const initialFormDateState = (
    props.editFormState ?
    new Date(props.editFormState.dateOfBirth) :
     new Date());


  const [form, setForm] = useState({ ...initialFormState });
  const [startDate, setStartDate] = useState(initialFormDateState);

  function formChangeHandler(e) {
    setForm({ ...form, [e.target.id]: e.target.value });
  }
  
  function onSubmit(e) {
    e.preventDefault();
    props.onSubmitHandler(form, startDate)
    props.closeModalHandler && props.closeModalHandler();
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
          <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} />
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