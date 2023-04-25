import React from "react";
import { CategoryBtn } from "../Styles/Styles";

const Categories = ({ filterItem, allCategory }) => {
  return (
    <CategoryBtn>
      <select onChange={(e) => filterItem(e.target.value)}>
        {allCategory.map((item) => {
          return (
            <option>
              {item}
            </option>
          );
        })}
      </select>
    </CategoryBtn>
  );
};

export default Categories;
