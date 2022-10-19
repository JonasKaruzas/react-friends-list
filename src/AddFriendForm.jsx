import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export const AddFriendForm = (props) => {
  return (
    <Form onSubmit={props.addHandler}>
      <Row>
        <Col>
      <FloatingLabel controlId="firstName" label="Name" className="mb-3" onChange={props.changeHandler}>
        <Form.Control type="text" placeholder="Jonas" />
      </FloatingLabel>
        </Col>
        <Col>
      <FloatingLabel controlId="lastName" label="Last name" className="mb-3" onChange={props.changeHandler}>
        <Form.Control type="text" placeholder="Jonaitis" />
      </FloatingLabel>
        </Col>
      </Row>
      <Row>
        <Col>
      <FloatingLabel controlId="age" label="Age" className="mb-3" onChange={props.changeHandler}>
        <Form.Control type="number" placeholder="33" />
      </FloatingLabel>
        </Col>
        <Col>
      <FloatingLabel controlId="city" label="City" className="mb-3" onChange={props.changeHandler}>
        <Form.Control type="text" placeholder="Vilnius" />
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