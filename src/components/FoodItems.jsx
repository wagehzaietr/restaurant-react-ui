import React, { useState } from "react";
import {
  Container,
  Left,
  Right,
  Content,
  FoodCard,
} from "../Styles/Styles";
import { AiOutlinePlus } from "react-icons/ai";
import { FaMinus } from "react-icons/fa";
import FoodDisplay from "./FoodDisplay";


const SingleQuestion = ({fooditem}) => {
  return (
    <Content>
      {fooditem.map((item,index) =>{
        return(
          <>
          <FoodDisplay item={item} {...fooditem} index={index} />
          </>
        )
      })}
    </Content>
  );
};

export default SingleQuestion;
