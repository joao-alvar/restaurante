import React, { useContext } from "react";
import { GlobalContext } from "../../context/UserContext/GlobalState";

export const MsgInput = (props) => {
  const { users } = useContext(GlobalContext);
  return (
    <div className="userList__wrap">
      {users.length === 1 ? (
        <>
          {users.map((user) => (
            <div className="userList__container" key={user.id}>
              <h3 className="userList__name">Bem vindo: {user.msg}</h3>
              <div className="edit__btn__wrapper"></div>
            </div>
          ))}
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
