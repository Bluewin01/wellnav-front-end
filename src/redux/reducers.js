// src/redux/reducers.js
import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  SET_SELECTED_ITEMS,
  SET_MEAL_TYPE,
  SET_CALORIES,
  SET_NUTRITION,
} from "./actionTypes";

const initialState = {
  counter: 0,
  selectedItems: [],
  mealType: null,
  takenCalories: 0,
  recommendedCalories: 0,
  takenCarbohydrates: 0,
  takenProtein: 0,
  takenFat: 0,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case SET_SELECTED_ITEMS:
      return {
        ...state,
        selectedItems: action.payload,
      };
    case SET_MEAL_TYPE:
      return {
        ...state,
        mealType: action.payload,
      };
    case SET_CALORIES:
      return {
        ...state,
        takenCalories: action.payload.takenCalories,
        recommendedCalories: action.payload.recommendedCalories,
      };
    case SET_NUTRITION:
      return {
        ...state,
        takenCarbohydrates: action.payload.takenCarbohydrates,
        takenProtein: action.payload.takenProtein,
        takenFat: action.payload.takenFat,
      };
    default:
      return state;
  }
};

export default rootReducer;
