import Axios from "axios";
// the state dont last when refreshing the page so we need to save him in the global headers
// funtion used to : if token is true (if he exist)  save it to the headers with a key "x-auth-token"
const setAuthToken = token => {
  // if (token) {Axios.defaults.headers.common["x-auth-token"] = token;

  if (token) {
    Axios.defaults.headers.common["x-auth-token"] = token;
  } else {
    delete Axios.defaults.headers.common["x-auth-token"];
  }
};

export default setAuthToken;
