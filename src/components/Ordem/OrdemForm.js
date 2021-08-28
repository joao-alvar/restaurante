import React from "react";
import FormLayout from "../../layout/Form";
import SearchBar from "../searchbar/Searchbar";
import Payment from "./Payment";
import BookData from "../../Data.json";
import FeaturedCollection from "../featured-collection/featured-collection";
import { AddUser } from "../UserInputName/UserInput";

const OrdemForm = (props) => {
  return (
    <>
      <FormLayout>
        <div className="form__layout__md">
          <div className="form__container">
            <label htmlFor="name" className="inputLabel">
              Nome:
            </label>
            <AddUser />
            <textarea
              placeholder="Adcionar observação"
              id="observacao"
              rows="6"
              cols="84"
            />
          </div>
          <SearchBar data={BookData} />
          <FeaturedCollection />
        </div>
        <Payment />
      </FormLayout>
    </>
  );
};

export default OrdemForm;
