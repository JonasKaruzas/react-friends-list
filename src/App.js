import { Friend } from "./Friend";
import { AddFriendForm } from "./AddFriendForm";
import { Filter } from "./Filter";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";

function App() {
  function getFriendListFromLocalstorage() {
    const savedFriends = localStorage.getItem("FriendsList");
    const initialValue = JSON.parse(savedFriends);
    return initialValue || [];
  }

  const [friends, setFriends] = useState(getFriendListFromLocalstorage());
  const [editFriendState, setEditFriendState] = useState({});
  const [searchValue, setSearchValue] = useState("");
  const [ageArrangeValue, setAgeArrangeValue] = useState("Ascending");

  useEffect(() => {
    localStorage.setItem("FriendsList", JSON.stringify(friends));
  }, [friends]);

  function deleteHandler(id) {
    setFriends(friends.filter((friend) => friend.id !== id));
  }

  function editHandler(id) {
    setEditFriendState(friends.filter((friend) => friend.id === id)[0]);
  }

  function onSubmitHandler(formData, dateOfBirth) {
    setFriends([...friends, { ...formData, id: new Date().getTime(), dateOfBirth: dateOfBirth.getTime() }]);
  }

  function onEditSubmitHandler(editableFriendData, dateOfBirth) {
    const indexOfEditableFriend = friends.findIndex((friend) => friend.id === editableFriendData.id);
    const newFriendsState = [...friends];
    newFriendsState[indexOfEditableFriend] = { ...editableFriendData, dateOfBirth };

    setFriends(newFriendsState);
  }

  function searchedAndArrangedFriends() {
    const filteredFriends = friends.filter((friend) => {
      return friend.firstName.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 || friend.lastName.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
    });

    return ageArrangeValue === "Ascending"
      ? filteredFriends.sort((a, b) => (new Date(a.dateOfBirth).getTime() < new Date(b.dateOfBirth).getTime() ? 1 : -1))
      : filteredFriends.sort((a, b) => (new Date(a.dateOfBirth).getTime() > new Date(b.dateOfBirth).getTime() ? 1 : -1));
  }

  const createFriendCards = searchedAndArrangedFriends().map((friend) => (
    <Col key={friend.id} className="my-1 col-12 col-sm-6 col-lg-3">
      <Friend onEditSubmitHandler={onEditSubmitHandler} editFormState={editFriendState} data={friend} onDelete={deleteHandler} onEdit={editHandler} />
    </Col>
  ));

  const noFriendsMsg = <Col className="text-center">Sorry... no friends in this list</Col>;

  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Col className="my-3 col-12 col-sm-8">
          <AddFriendForm btnText="Add friend" onSubmitHandler={(form, dateOfBirth) => onSubmitHandler(form, dateOfBirth)} />
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <Col className="my-3 col-12 col-sm-8">
          <Filter searchValue={searchValue} setSearchValue={setSearchValue} ageArrangeValue={ageArrangeValue} setAgeArrangeValue={setAgeArrangeValue} />
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">{friends.length > 0 ? createFriendCards : noFriendsMsg}</Row>
    </Container>
  );
}

export default App;
