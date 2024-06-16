// src/redux/actions.js
import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  SET_SELECTED_ITEMS,
  SET_MEAL_TYPE,
  SET_CALORIES,
  SET_NUTRITION,
} from "./actionTypes";

export const incrementCounter = () => ({
  type: INCREMENT_COUNTER,
});

export const decrementCounter = () => ({
  type: DECREMENT_COUNTER,
});

export const setSelectedItems = (items) => ({
  type: SET_SELECTED_ITEMS,
  payload: items,
});

export const setMealType = (mealType) => ({
  type: SET_MEAL_TYPE,
  payload: mealType,
});

export const setCalories = (takenCalories, recommendedCalories) => ({
  type: SET_CALORIES,
  payload: { takenCalories, recommendedCalories },
});

export const setNutrition = (takenCarbohydrates, takenProtein, takenFat) => ({
  type: SET_NUTRITION,
  payload: { takenCarbohydrates, takenProtein, takenFat },
});
