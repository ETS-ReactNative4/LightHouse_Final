import "./App.css";
import useApplicationData from "./hooks/useApplicationData";
import Oauth from "./components/oauth";
import { useState } from "react";

const App = () => {
  const { state, dispatch } = useApplicationData();
  const { user, setUser } = useState("");
  console.log(user);
  const userList = state.users.map((user) => (
    <li key={user.id}>
      {" "}
      {user.first_name} {user.last_name} {user.email}{" "}
    </li>
  ));
  return (
    <div className="App">
      <Oauth result={(res) => setUser(res)} />
      <h1> Users </h1>

      <ul> {userList} </ul>
    </div>
  );
};

export default App;
