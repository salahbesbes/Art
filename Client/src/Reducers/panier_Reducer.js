import { ADD_TO_CART } from "../Actions_art_wear/Const";
const initialstate = [

];

const panier_Reducer = (state = initialstate, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TO_CART:
      return state.map(el => el.name).includes(payload.name)
        ? state.map(el => el.name === payload.name ? {...el , qte : el.qte += payload.qte} : el)
        : [...state, payload];

    default:
      return state;
  }
};

export default panier_Reducer;
