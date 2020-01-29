import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  AUTH_ERROR,
  USER_LOADED,
  ALL_USERS
} from "../Actions_art_wear/Const";

const initialState = {
  // obj
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: {},
  users: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload, // we are adding the payload to the state ( its the token we are sending from the back)
        isAuthenticated: true,
        loading: false
      };

    case AUTH_ERROR:
    case LOGIN_FAIL:
    case REGISTER_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: {},
        users: []
      };

    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload // payload is the data sent from the back (obj)
      };
    case ALL_USERS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        users: payload // payload is the data sent from the back (obj)
      };
    default:
      return state;
  }
}
