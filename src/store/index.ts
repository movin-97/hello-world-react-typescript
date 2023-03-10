import * as redux from "redux";
import { AuthResponseModel } from "../model";

const ACCESS_TOKEN_KEY = "access_token";
const REFRESH_TOKEN_KEY = "refresh_token";

const intialState: AuthResponseModel = {
  email: "",
  firstname: "",
  gender: "",
  id: 0,
  image: "",
  lastName: "",
  token: null || localStorage.getItem(ACCESS_TOKEN_KEY),
  username: "",
};

const reducer = (state = intialState, action: any) => {
  if (action.type === "onAuthendication") {
    localStorage.setItem(ACCESS_TOKEN_KEY, action.payload.token);
    localStorage.setItem(REFRESH_TOKEN_KEY, action.payload.token);
    state = action.payload;

    return {
      ...state,
      accessToken: action.payload.accessToken,
      refreshToken: action.payload.refreshToken,
    };
  }

  if(action.type === "logout"){
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
  }

  return state;
};

const store = redux.legacy_createStore(reducer);
export default store;
