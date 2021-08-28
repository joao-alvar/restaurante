import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuid } from "uuid";
import { UserList } from "./UserList";

export const AddUser = () => {
  const [name, setName] = useState("");
  const { addUser } = useContext(GlobalContext);

  const onSubmit = (e) => {
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
    <form onSubmit={onSubmit}>
      <label>Name</label>
      <input
        type="text"
        value={name}
        onChange={onChange}
        name="name"
        required
      />
      {/* <textarea rows="8" cols="20" /> */}
      <button type="submit">Submit</button>

      <UserList />
    </form>
  );
};
