import styled, { keyframes } from "styled-components";

const Container = styled.div`
  display: flex;
  padding-left: 3rem;
  padding-right: 3rem;
  width: 90%;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
  flex-direction: column;

  h2 {
    margin-top: 4rem;
    margin-bottom: 2.5rem;
    position: relative;
    font-weight: 400;

    &::before {
      content: "";
      display: block;
      width: 90px;
      height: 4px;
      background-color: orange;
      margin: 0 auto;
      position: absolute;
      bottom: 0;
      top: 2.6rem;
      left: 2rem;
      @media only screen and (max-width: 768px) {
        width: 70px;
        left: 1.4rem;
      
    }
    }
  }
`;

const Left = styled.div`
  flex: 1;
`;

const Right = styled.div``;

const FoodCard = styled.div`
  width: 380px;
  margin: 1rem;

  @media only screen and (max-width: 768px) {
    width: 360px;
  }

  p {
    line-height: 2;
    color: gray;
    padding-left: 1.2rem;
    padding-right: 1.2rem;
  }

  img {
    width: 100%;
    height: 260px;
    object-fit: cover;
    border-radius: 5px;
    border-radius: 8px solid #fff;
    border: 3px solid orange;
  }

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;

    h6 {
      background-color: orange;
      padding: 2px;
      border-radius: 5px;
      color: white;
      width: 20%;
    }
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const CategoryBtn = styled.div`
  select{
    border: none;
    background: orange;
    color: white;
    padding: 0.5rem;
    border-radius: 5px;
    letter-spacing: 2;
    box-shadow: 0 0 10px #69686886;
    transition: 0.4s ease-in-out;
    text-transform: capitalize;
    display: inline-block;
    outline: none;
    color: #373737;
  }

@media only screen and (max-width: 768px) {

    }

`;
// button {
//   cursor: pointer;
//   color: white;
//   background: orange;
//   border: transparent;
//   border-radius: 7px;
//   letter-spacing: 2;
//   padding: 0.375rem 0.75rem;
//   box-shadow: 0 0 10px #b4b3b387;
//   transition: 0.4s ease-in-out;
//   text-transform: capitalize;
//   display: inline-block;
//   margin-left: 0.8rem;

//   &:hover {
//     background: #d06f00;
//     color: #fff;
//   }
// }
export { Container, Left, Right, FoodCard, Content, CategoryBtn };
