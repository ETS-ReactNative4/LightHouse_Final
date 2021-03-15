import useApplicationData from "../../hooks/useApplicationData"

export default function Login(props) {

  const { state, dispatch } = useApplicationData();
  const userList = state.users.map((user) => (<li key={user.id} > {user.first_name} {user.last_name} {user.email} </li>
));

  return (
  <div className="App" >  
    <h1>I am login</h1>
    <ul> {userList} </ul>
  </div>
  );

}
