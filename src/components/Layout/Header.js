import React from "react";

import MealImage from "../assets/meals.jpg";
import HeaderCartButton from "../UI/HeaderCartButton";
import classes from "./Header.module.css";

export default function Header(props) {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
      </header>
      <div className={classes['main-image']}>
        <img src={MealImage} alt="A table full of food."></img>
      </div>
    </React.Fragment>
  );
}
