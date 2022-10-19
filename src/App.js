import { Friend } from "./Friend";
import { AddFriendForm } from "./AddFriendForm";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const friends = [
  { id: 1, firstName: "John", lastName: "Smith", age: 32, city: "Kaunas" },
  { id: 2, firstName: "Maria", lastName: "Hudghes", age: 28, city: "Siauliai" },
  { id: 3, firstName: "Thomas", lastName: "Muiller", age: 33, city: "Vilnius" },
];

function App() {
  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Col className="my-3 col-12 col-sm-8">
          <AddFriendForm />
        </Col>
      </Row>

      <Row className="d-flex justify-content-center">
        {friends.map((friend) => (
          <Col className="my-1 col-12 col-sm-6 col-lg-3">
            <Friend data={friend} key={friend.id} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;
