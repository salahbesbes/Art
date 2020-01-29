import { ADD_TO_CART } from "./Const";

export const addToCart = obj => dispatch => {
  dispatch({ type: ADD_TO_CART, payload: obj });
};
