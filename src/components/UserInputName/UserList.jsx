import React, { useContext } from "react";
import { GlobalContext } from "../../context/UserContext/GlobalState";
import { Link } from "react-router-dom";

export const UserList = (props) => {
  const { users, removeUser } = useContext(GlobalContext);
  return (
    <div className="mt-4">
      {users.length === 1 ? (
        <>
          {users.map((user) => (
            <div className="d-flex" key={user.id}>
              <h3>Bem vindo: {user.name}</h3>
              <div className="ml-auto">
                <Link
                  to={`/edit/${user.id}`}
                  color="warning"
                  className="btn btn-warning mr-1"
                >
                  Edit
                </Link>
                <button onClick={() => removeUser(user.id)} color="danger">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
