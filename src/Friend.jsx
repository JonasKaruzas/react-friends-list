import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


export const Friend = (props) => {
  return (<>
        <Card border="secondary">
        <Card.Header>
          <Container fluid className='g-0'>
            <Row >
              <Col className='d-flex align-items-center'>ID: {props.data.id}</Col>
              <Col><Button variant='outline-danger' size='sm' className="float-end">Delete</Button></Col>
            </Row>
          </Container>
          </Card.Header>
        <Card.Body>
          <Card.Title>{props.data.firstName} {props.data.lastName}</Card.Title>
          <Card.Text>
          <div>Age: {props.data.age}</div>
          <div>From: {props.data.city}</div>
          </Card.Text>
        </Card.Body>
      </Card>
    </>)
}