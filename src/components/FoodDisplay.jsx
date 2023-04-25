import React, { useState } from "react";
import { FoodCard } from "../Styles/Styles";

const FoodDisplay = ({ item, index, foodItems,setFoodItems }) => {
  const { title, info, price, category, image } = item;


  return (
    <>
      <FoodCard key={index} id="food">
        <img src={image} alt=""/>
        <div className="title">
          <h5>{title}</h5>
          <h6>${price}</h6>
        </div>
        <p>{info}</p>
        </FoodCard>

    </>
  );
};

export default FoodDisplay;
