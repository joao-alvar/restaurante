import React from "react";
import SearchBar from "../searchbar/Searchbar";
import Payment from "./Payment";
import BookData from "../../Data.json";
import FeaturedCollection from "../featured-collection/featured-collection";
import { AddUser } from "../UserInputName/UserInput";
import { UserList } from "../UserInputName/UserList";
import { AddMsg } from "../userMsg/UserAddMsg";

const OrdemForm = (props) => {
  return (
    <>
      <div className="form__layout__md">
        <div className="form__container">
          <div className="form__input__content">
            <UserList />
            <label htmlFor="name" className="inputLabel">
              Nome:
            </label>
            <AddUser />
            <AddMsg />
            <SearchBar data={BookData} />
          </div>
          <FeaturedCollection />
        </div>
      </div>
      <div className="form__layout__payment">
        <Payment />
      </div>
    </>
  );
};

export default OrdemForm;
