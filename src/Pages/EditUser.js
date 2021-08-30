import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/UserContext/GlobalState";
import { Link, useHistory } from "react-router-dom";
import Input from "../controls/Input";

export const EditUser = (props) => {
  const { editUser, users } = useContext(GlobalContext);
  const [selectedUser, setSelectedUser] = useState({
    id: "",
    name: "",
  });
  const history = useHistory();
  const currentUserId = props.match.params.id;

  useEffect(() => {
    const userId = currentUserId;
    const selectedUser = users.find((user) => user.id === userId);
    setSelectedUser(selectedUser);
  }, [currentUserId, users]);

  const onChange = (e) => {
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    editUser(selectedUser);
    history.push("/");
  };

  return (
    <section className="edit__user__container">
      <div className="edit__user__wrap">
        <form onSubmit={onSubmit} className="edit__user__form">
          <div className="edit__user__form__wrap">
            <label className="edit__user__form__label">Nome</label>
            <Input
              className="edit__user__form__input"
              type="text"
              value={selectedUser.name}
              onChange={onChange}
              name="name"
              placeholder="Enter user"
              required
            ></Input>
          </div>
          <div className="edit__user__form__btn">
            <button type="submit" className="btn__edit">
              Editar <span className="btn__edit__span">Nome</span>
            </button>
            <button className="btn__cancel">
              <Link to="/" className="btn__cancel__link">
                Cancelar
              </Link>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
