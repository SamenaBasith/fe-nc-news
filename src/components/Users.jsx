import { useEffect, useState } from "react";
import { getUsers } from "../api";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(( usersFromApi ) => {
      setUsers(usersFromApi);
    });
  }, []);

  return (
    <div>
      <div>
        {users.map((user) => {
          return (
            <div key={user.username}>
              <h5>{user.username}</h5>
              <img
                className="login-page-img"
                src={user.avatar_url}
                alt={`${user.username}'s profile pic`}
              ></img>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Users;