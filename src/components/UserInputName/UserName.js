import React, { useContext } from "react";
import { GlobalContext } from "../../context/UserContext/GlobalState";

export const UserName = (props) => {
  const { users } = useContext(GlobalContext);
  return (
    <div className="userList__wrap">
      {users.length === 1 ? (
        <>
          {users.map((user) => (
            <div key={user.id}>
              <h3 className="Username__kitchen">{user.name}</h3>
            </div>
          ))}
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
