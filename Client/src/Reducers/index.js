import { combineReducers } from "redux";
import search_Reducer from "./search_Reducer";
import sign_Reducer from "./sign_Reducer";
import { panier_Reducer , order_Reducer} from "./Cart_Order_Reducer";
export default combineReducers({
  search_Reducer,
  sign_Reducer,
  panier_Reducer,
  order_Reducer
});
