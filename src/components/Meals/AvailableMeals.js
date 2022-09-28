import React, { useEffect, useState } from "react";

import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem";

export default function AvailableMeals() {
  const [meals, setMeals] = useState([]);
  // Loading state for when data is being fetched:
  const [isLoading, setIsLoading] = useState(true);
  // Error state incase of a backend issue:
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-http-5c112-default-rtdb.firebaseio.com/meals.json"
      );

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const loadedMeals = [];
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };
    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading....</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <seciton className={classes.MealError}>
        <p>{httpError}</p>
      </seciton>
    );
  }

  const MealsList = meals.map((meal) => (
    <MealItem
      name={meal.name}
      key={meal.id}
      description={meal.description}
      id={meal.id}
      price={meal.price}
    ></MealItem>
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{MealsList}</ul>
      </Card>
    </section>
  );
}
