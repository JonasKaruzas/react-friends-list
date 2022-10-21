import { Friend } from "./Friend";
import { AddFriendForm } from "./AddFriendForm";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";

function App() {
  const [friends, setFriends] = useState([
    { id: 1, firstName: "John", lastName: "Smith", age: 32, city: "Kaunas" },
    { id: 2, firstName: "Maria", lastName: "Hudghes", age: 28, city: "Siauliai" },
    { id: 3, firstName: "Thomas", lastName: "Muiller", age: 33, city: "Vilnius" },
  ]);

  const [form, setForm] = useState({
    id: "",
    firstName: "",
    lastName: "",
    age: "",
    city: "",
  });

  function deleteHandler(id) {
    setFriends(friends.filter((friend) => friend.id !== id));
  }

  function formHandler(e) {
    setForm({ ...form, [e.target.id]: e.target.value });
  }

  function emptyForm() {
    const emptyForm = {};
    Object.keys(form).forEach((key) => (emptyForm[key] = ""));
    setForm(emptyForm);
  }

  function formSubmitHandler(e) {
    e.preventDefault();
    setFriends([...friends, { ...form, id: new Date().getTime() }]);
    emptyForm();
  }

  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Col className="my-3 col-12 col-sm-8">
          <AddFriendForm onChange={formHandler} formValue={form} onSubmit={formSubmitHandler} />
        </Col>
      </Row>

      <Row className="d-flex justify-content-center">
        {friends.map((friend) => (
          <Col key={friend.id} className="my-1 col-12 col-sm-6 col-lg-3">
            <Friend data={friend} onDelete={deleteHandler} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;
