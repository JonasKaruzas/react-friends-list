import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Dropdown from 'react-bootstrap/Dropdown';

export function Filter(props) {
  function handleDropdown(e) {
    props.setAgeArrangeValue(e)
  }

  return (
    <Form >
      <Row>
        <Col>
        <FloatingLabel controlId="firstName" label="Search by name" className="mb-3">
          <Form.Control type="text" value={props.searchValue} onChange={(e) => props.setSearchValue(e.target.value)}/>
        </FloatingLabel>
        </Col>
        <Col>
          <Dropdown onSelect={handleDropdown}>
            <Dropdown.Toggle variant="success" id="dropdown-basic" > 
              Arrange age: {props.ageArrangeValue}
            </Dropdown.Toggle>

            <Dropdown.Menu >
              <Dropdown.Item eventKey='Ascending'>Ascending</Dropdown.Item>
              <Dropdown.Item eventKey='Descending'>Descending</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
    </Form>
  )
}