import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/UserContext/GlobalState";
import { v4 as uuid } from "uuid";
import { UserList } from "./UserList";
import Input from "../../controls/Input";

export const AddUser = () => {
  const [name, setName] = useState("");
  const { addUser } = useContext(GlobalContext);

  const OnHandleName = (e) => {
    e.preventDefault();
    const newUser = {
      id: uuid(),
      name,
    };
    addUser(newUser);
  };

  const onChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="inputName__container">
      <Input
        className="inputName"
        id="name"
        type="text"
        value={name}
        onChange={onChange}
        name="name"
        required
      />
      <button onClick={OnHandleName}>Submit</button>

      <UserList />
    </div>
  );
};
