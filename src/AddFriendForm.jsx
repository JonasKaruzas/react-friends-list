import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export const AddFriendForm = () => {
  return (
    <Form>
      <Row>
        <Col>
      <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
        <Form.Control type="text" placeholder="Jonas" />
      </FloatingLabel>
        </Col>
        <Col>
      <FloatingLabel controlId="floatingInput" label="Last name" className="mb-3">
        <Form.Control type="text" placeholder="Jonaitis" />
      </FloatingLabel>
        </Col>
      </Row>
      <Row>
        <Col>
      <FloatingLabel controlId="floatingInput" label="Age" className="mb-3">
        <Form.Control type="text" placeholder="33" />
      </FloatingLabel>
        </Col>
        <Col>
      <FloatingLabel controlId="floatingInput" label="City" className="mb-3">
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