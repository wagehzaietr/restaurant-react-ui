import React from "react";
import { CategoryBtn } from "../Styles/Styles";
const Categories = ({ filterItem, allCategory }) => {
  return (
    <CategoryBtn>
      <div>
        {allCategory.map((item) => {
          return (
            <button className="btn" onClick={() => filterItem(item)} key={item}>
              {item}
            </button>
          );
        })}
      </div>
    </CategoryBtn>
  );
};

export default Categories;
