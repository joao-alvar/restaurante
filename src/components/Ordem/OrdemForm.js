import React from "react";
import Input from "../../controls/Input";
import FormLayout from "../../layout/Form";
import SearchBar from "../searchbar/Searchbar";
import Payment from "./Payment";
import BookData from "../../Data.json";
import FeaturedCollection from "../featured-collection/featured-collection";

const OrdemForm = (props) => {
  const { values, errors, handleInputChange } = props;
  return (
    <>
      <FormLayout>
        <div className="form__layout__md">
          <div className="form__container">
            <label htmlFor="name" className="inputLabel">
              Nome:
            </label>
            <Input
              id="name"
              name="name"
              value={values.customerName}
              onChange={handleInputChange}
            />
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
        <Payment {...{ values, errors, handleInputChange }} />
      </FormLayout>
    </>
  );
};

export default OrdemForm;
