import { useState } from "react";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import "./App.css";
import { Container, Left, Right, } from "./Styles/Styles";
import FoodItems from './components/FoodItems'
import Categories from "./components/Categories";
import {foodItems} from './Data'
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";

const allCategory = ["all",...new Set(foodItems.map(item => item.category))]
console.log(allCategory);


const App = () => {
const [fooditem,setFooditem]=useState(foodItems)
const [categories,setCategories]=useState([])

const filterItem = (category)=>{
  if(category === 'all'){
    setFooditem(foodItems)
    return;
  }
  const newItems = foodItems.filter((item => item.category === category))
  setFooditem(newItems)
  console.log(newItems)
}


  return (
    <Container>
      <Navbar/>
      <Main/>
      <h2>Our Menu</h2>
      <Categories {...foodItems} foodItems={foodItems} filterItem={filterItem} allCategory={allCategory} />
      <FoodItems foodItems={foodItems} fooditem={fooditem} setFooditem={setFooditem} />
    </Container>
  );
};

export default App;
