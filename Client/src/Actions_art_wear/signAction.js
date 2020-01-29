import axios from "axios";
import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  USER_LOADED,
  AUTH_ERROR,
  ALL_USERS
} from "./Const";

import setAuthToken from "../Utils/setAuthToken";


export const register = ({ name, email, password }) => async dispatch => {
  let config = {
    headers: { "Content-Type": "application/json" }
  };
  let body = JSON.stringify({ name, email, password }); // we are sending the  body(as json) + the header(type json) to the backend
  console.log(body);
  try {
    let res = await axios.post("/artwear/signup", body, config); //sent
    console.log("we access to the register route");

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data // sending the token to the reducer to the state
    });
    dispatch(console.log(res.data));
    dispatch(get_User());
  } catch (err) {
    console.log("this is register fail ");
    dispatch({
      type: REGISTER_FAIL
    });
  }
};

export const Log_in = ({ email, password }) => async dispatch => {
  let config = {
    headers: { "Content-Type": "application/json" }
  };
  let body = JSON.stringify({ email, password }); // we are sending the  body(as json) + the header(type json) to the backend
  try {
    let res = await axios.post("/artwear/signin", body, config); //sent
    console.log("we access to the Login route");

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data // sending the token to the reducer to the state
    });
    dispatch(get_User());
  } catch (err) {
    console.log(err);
    dispatch({ type: LOGIN_FAIL });
  }
};

export const LogOut = () => dispatch => {
  dispatch({ type: LOGIN_FAIL });
};

export const get_User = () => async dispatch => {
  if (localStorage.token) setAuthToken(localStorage.token);
  try {
    const res = await axios.get("/artwear/user");
    console.log("we access to the get user route");
    dispatch({
      type: USER_LOADED,
      payload: res.data // data sent from the route (the user)
    });
  } catch (err) {
    console.log("this is userloaded fail ");
    dispatch({
      type: AUTH_ERROR
    });
  }
};

export const get_all_Users = () => async dispatch => {
  if (localStorage.token) setAuthToken(localStorage.token);
  try {
    const res = await axios.get("/artwear/allusers");
    console.log("we access to the get all users route");

    dispatch({
      type: ALL_USERS,
      payload: res.data
    });
  } catch (err) {
    console.log("we fail to get all users ");
    dispatch({
      type: AUTH_ERROR
    });
  }
};

export const delete_User = id => async dispatch => {
  if (localStorage.token) setAuthToken(localStorage.token);
  try {
    console.log('this action')
    await axios.delete(`/artwear/user/${id}`);
    dispatch(get_all_Users());

    console.log("deleted");
  } catch (err) {
    console.log("we fail to delete the users ");
    dispatch({
      type: AUTH_ERROR
    });
  }
};
