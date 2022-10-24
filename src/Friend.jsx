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
              <Col className='col-sm-auto'><Button onClick={() => props.onDelete(props.data.id)} variant='outline-danger' size='sm' className="float-end">X</Button></Col>
            </Row>
          </Container>
          </Card.Header>
        <Card.Body>
          <Card.Title>{props.data.firstName} {props.data.lastName}</Card.Title>
          <Card.Text className='mb-0'>Age: {props.data.age}</Card.Text>
          <Card.Text>From: {props.data.city}</Card.Text>
        </Card.Body>
      </Card>
    </>)
}