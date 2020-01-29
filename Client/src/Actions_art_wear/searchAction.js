import { SEARCH_ALL, SEARCH_CATEGORIE } from "./Const";
import axios from "axios";

export const searchAll = () => async dispatch => {
  let res = await axios.get("/artwear/products");
  console.log("we access to the Get all product route");
  dispatch(  { type: SEARCH_ALL, payload: res.data });
};

export const searchCategorie = () => {
  return {
    action: SEARCH_CATEGORIE
  };
};


