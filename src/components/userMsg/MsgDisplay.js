import React, { useContext } from "react";
import { MsgContext } from "../../context/msgContext/MsgContext";

export const MsgDisplay = (props) => {
  const { messages } = useContext(MsgContext);
  return (
    <div className="userList__wrap">
      {messages.length > 0 ? (
        <>
          {messages.map((msg) => (
            <div key={msg.id}>
              <p className="user__msg__p">{msg.usermsg}</p>
            </div>
          ))}
        </>
      ) : (
        <h2 className="msg__empty">Nenhuma observação</h2>
      )}
    </div>
  );
};
