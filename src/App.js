import { Friend } from "./Friend";
import { AddFriendForm } from "./AddFriendForm";

const friends = [
  { id: 1, firstName: "John", lastName: "Smith", age: 32, city: "Kaunas" },
  { id: 2, firstName: "Maria", lastName: "Hudghes", age: 28, city: "Siauliai" },
  { id: 3, firstName: "Thomas", lastName: "Muiller", age: 33, city: "Vilnius" },
];

function App() {
  return (
    <>
      <AddFriendForm />
      {friends.map((friend) => (
        <Friend data={friend} key={friend.id} />
      ))}
    </>
  );
}

export default App;
