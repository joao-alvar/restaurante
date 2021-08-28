import React, { useContext } from "react";
import { GlobalContext } from "./GlobalState";

export const UserName = (props) => {
  const { users } = useContext(GlobalContext);
  return (
    <div className="mt-4">
      {users.length === 1 ? (
        <>
          {users.map((user) => (
            <div className="d-flex" key={user.id}>
              Nome do cliente: <strong>{user.name}</strong>
              <div className="ml-auto"></div>
            </div>
          ))}
        </>
      ) : (
        <h4 className="text-center">Número do pedido: {users.id}</h4>
      )}
    </div>
  );
};
