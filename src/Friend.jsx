import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { EditModal } from "./EditModal";

function getYearMonthDay(ms) {
  const year = new Date(ms).getFullYear();
  const month = new Date(ms).getMonth() + 1;
  const day = new Date(ms).getDate();

  return `${year} ${month.toString().padStart(2, '0')} ${day.toString().padStart(2, '0')}`
}

export const Friend = (props) => {
  return (<>
        <Card border="secondary">
        <Card.Header>
          <Container fluid className='g-0'>
            <Row >
              <Col className='d-flex align-items-center'>ID: {props.data.id}</Col>
              <Col className='col-sm-auto'>
                <EditModal 
                  onEditSubmitHandler={props.onEditSubmitHandler} 
                  editFormState={props.editFormState} 
                  onEdit={() => props.onEdit(props.data.id)}/>
                <Button onClick={() => props.onDelete(props.data.id)} variant='danger' size='sm' className="float-end">X</Button></Col>
            </Row>
          </Container>
          </Card.Header>
        <Card.Body>
          <Card.Title>{props.data.firstName} {props.data.lastName}</Card.Title>
          <Card.Text className='mb-0'>Age: {new Date(Math.abs(new Date() - new Date(props.data.dateOfBirth))).getFullYear() - 1970}</Card.Text>
          <Card.Text className='mb-0'>From: {props.data.city}</Card.Text>
          <Card.Text className='mb-0'>Date of birth: {getYearMonthDay(props.data.dateOfBirth)}</Card.Text>
        </Card.Body>
      </Card>
    </>)
}