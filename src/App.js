import { Friend } from "./Friend";
import { AddFriendForm } from "./AddFriendForm";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [
        { id: 1, firstName: "John", lastName: "Smith", age: 32, city: "Kaunas" },
        { id: 2, firstName: "Maria", lastName: "Hudghes", age: 28, city: "Siauliai" },
        { id: 3, firstName: "Thomas", lastName: "Muiller", age: 33, city: "Vilnius" },
      ],
    };
  }

  deleteFriend(id) {
    const friends = this.state.friends.filter((friend) => friend.id !== id);
    this.setState({
      friends,
    });
  }

  render() {
    return (
      <Container>
        <Row className="d-flex justify-content-center">
          <Col className="my-3 col-12 col-sm-8">
            <AddFriendForm />
          </Col>
        </Row>

        <Row className="d-flex justify-content-center">
          {this.state.friends.map((friend) => (
            <Col key={friend.id} className="my-1 col-12 col-sm-6 col-lg-3">
              <Friend data={friend} deleteHandler={() => this.deleteFriend(friend.id)} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default App;
