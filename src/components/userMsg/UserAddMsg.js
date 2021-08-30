import React, { useState, useContext } from "react";
import { MsgContext } from "../../context/msgContext/MsgContext";

export const AddMsg = () => {
  const [usermsg, setMsg] = useState("");
  const { addMsg } = useContext(MsgContext);

  const OnHandleMsg = (e) => {
    e.preventDefault();
    alert("Menssagem recebida");

    const newMsg = {
      usermsg,
    };
    addMsg(newMsg);
  };

  const onChangeHandle = (e) => {
    setMsg(e.target.value);
  };

  return (
    <div className="textarea__container">
      <textarea
        className="form__input textArea"
        placeholder="Adcionar observação"
        id="observacao"
        name="observacao"
        value={usermsg}
        onChange={onChangeHandle}
        maxLength="150"
      />
      <button onClick={OnHandleMsg} className="inputMsg__btn">
        enviar
      </button>
    </div>
  );
};
