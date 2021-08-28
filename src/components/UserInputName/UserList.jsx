import React, { useContext } from "react";
import { GlobalContext } from "../../context/UserContext/GlobalState";
import { Link } from "react-router-dom";

export const UserList = (props) => {
  const { users, removeUser } = useContext(GlobalContext);
  return (
    <div className="userList__wrap">
      {users.length === 1 ? (
        <>
          {users.map((user) => (
            <div className="userList__container" key={user.id}>
              <h3 className="userList__name">Bem vindo: {user.name}</h3>
              <div className="edit__btn__wrapper">
                <button className="edit__btn">
                  <Link to={`/edit/${user.id}`} className="edit__btn__link">
                    Editar
                  </Link>
                </button>
                <button
                  onClick={() => removeUser(user.id)}
                  className="delete__btn"
                >
                  Deletar
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
