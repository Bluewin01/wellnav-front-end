// src/redux/actions.js
import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  SET_SELECTED_ITEMS,
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
