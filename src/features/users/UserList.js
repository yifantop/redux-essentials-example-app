import { useSelector } from "react-redux"
import { selectAllUsers } from "./usersSlice"
import { Link } from "react-router-dom";

export const UserList = () => {
  const users = useSelector(selectAllUsers);

  const renderUsers = users.map(user => (
    <li key={user.id}>
      <Link to={`/users/${user.id}`}>{user.name}</Link>
    </li>
  ));

  return (
    <section>
      <h2>Users</h2>
      <ul>{renderUsers}</ul>
    </section>
  )
}