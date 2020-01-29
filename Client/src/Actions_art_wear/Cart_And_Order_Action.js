import { ADD_TO_CART, ADD_ORDER_TO_DB, GET_ALL_ORDERS } from "./Const";
import axios from "axios";
import setAuthToken from "../Utils/setAuthToken";

/* **************  Cart ACTION  ******************  */

export const addToCart = obj => dispatch => {
  dispatch({ type: ADD_TO_CART, payload: obj });
};

export const add_Commande_To_Db = array => async dispatch => {
  if (localStorage.token) setAuthToken(localStorage.token);
  let config = {
    headers: { "Content-Type": "application/json" }
  };
  let body = JSON.stringify(array);
  try {
    await axios.post("/artwear/order", body, config);
    console.log("we access post order route ");

    dispatch({ type: ADD_ORDER_TO_DB, payload: array });
  } catch (err) {
    console.log(err);
  }
};

/* **************  Cart ACTION  ******************  */

export const get_all_orders = () => async dispatch => {
  if (localStorage.token) setAuthToken(localStorage.token);

  try {
    let orders = await axios.get("/artwear/orders");
    console.log("we access all orders route ");
    dispatch({ type: GET_ALL_ORDERS, payload: orders.data });
  } catch (err) {
    console.log("we fail to get all orders ");
    console.log(err);
  }
};
