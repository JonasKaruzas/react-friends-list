import { Friend } from "./Friend";
import { AddFriendForm } from "./AddFriendForm";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";

function NoFriends() {
  return <Col className="text-center">Sorry... no friends in this list</Col>;
}

function App() {
  const [friends, setFriends] = useState(() => {
    const savedFriends = localStorage.getItem("FriendsList");
    const initialValue = JSON.parse(savedFriends);
    return initialValue || "";
  });

  useEffect(() => {
    localStorage.setItem("FriendsList", JSON.stringify(friends));
  }, [friends]);

  function deleteHandler(id) {
    setFriends(friends.filter((friend) => friend.id !== id));
  }

  function onSubmitHandler(form) {
    setFriends([...friends, { ...form, id: new Date().getTime() }]);
  }

  function ShowFriends() {
    return friends.map((friend) => (
      <Col key={friend.id} className="my-1 col-12 col-sm-6 col-lg-3">
        <Friend data={friend} onDelete={deleteHandler} />
      </Col>
    ));
  }

  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Col className="my-3 col-12 col-sm-8">
          <AddFriendForm onSubmitHandler={(form) => onSubmitHandler(form)} />
        </Col>
      </Row>

      <Row className="d-flex justify-content-center">{friends.length > 0 ? <ShowFriends /> : <NoFriends />}</Row>
    </Container>
  );
}

export default App;
