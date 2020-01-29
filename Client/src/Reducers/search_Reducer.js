import { SEARCH_ALL } from "../Actions_art_wear/Const";

const initialstate = [] ;

const SearchReducer = (state = initialstate, action) => {
  const { type, payload } = action;
  switch (type) {
    case SEARCH_ALL:
      return state.concat(payload) // res.data

    default:
      return state;
  }
};
export default SearchReducer;
