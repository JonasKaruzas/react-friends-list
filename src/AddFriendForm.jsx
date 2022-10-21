import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export const AddFriendForm = (props) => {
  return (
    <Form onSubmit={props.onSubmit}>
      <Row>
        <Col>
      <FloatingLabel controlId="firstName" label="Name" className="mb-3">
        <Form.Control type="text" placeholder="Jonas" onChange={props.onChange} value={props.formValue.firstName}/>
      </FloatingLabel>
        </Col>
        <Col>
      <FloatingLabel controlId="lastName" label="Last name" className="mb-3">
        <Form.Control type="text" placeholder="Jonaitis" onChange={props.onChange} value={props.formValue.lastName}/>
      </FloatingLabel>
        </Col>
      </Row>
      <Row>
        <Col>
      <FloatingLabel controlId="age" label="Age" className="mb-3">
        <Form.Control type="number" placeholder="33" onChange={props.onChange} value={props.formValue.age}/>
      </FloatingLabel>
        </Col>
        <Col>
      <FloatingLabel controlId="city" label="City" className="mb-3">
        <Form.Control type="text" placeholder="Vilnius" onChange={props.onChange} value={props.formValue.city}/>
      </FloatingLabel>
        </Col>
      </Row>
      <div className='d-grid'>
      <Button variant="warning" type="submit">
        Add friend
      </Button>
      </div>
    </Form>
  );
}