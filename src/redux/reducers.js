// src/redux/reducers.js
import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  SET_SELECTED_ITEMS,
  SET_MEAL_TYPE,
} from "./actionTypes";

const initialState = {
  counter: 0,
  selectedItems: [],
  mealType: null,
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
    default:
      return state;
  }
};

export default rootReducer;
