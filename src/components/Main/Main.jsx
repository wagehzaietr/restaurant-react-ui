import React from "react";
import {
  LandingSection,
  LandingContainer,
  Left,
  Right,
  Overlay,
} from "../Main/Main.style";
import Burger from "../../images/burger.jpg";

const Main = () => {
  return (
    <LandingSection Burgers={Burger} id="#">
      <Overlay />
      <LandingContainer>
        <Left>
          <h1>Welcome to Burger  </h1>
          <p>
            Discover the flavors of our delectable menu, crafted with only the
            freshest ingredients and cooked to <span>perfection</span>.From
            savory entrees
          </p>
        </Left>
        <Right></Right>
      </LandingContainer>
    </LandingSection>
  );
};

export default Main;
