import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";

export const UserList = (props) => {
  const { users, removeUser } = useContext(GlobalContext);
  return (
    <div className="mt-4">
      {users.length === 1 ? (
        <>
          {users.map((user) => (
            <div className="d-flex" key={user.id}>
              <strong>{user.name}</strong>
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
        <h4 className="text-center">Número do pedido: {users.id}</h4>
      )}
    </div>
  );
};
