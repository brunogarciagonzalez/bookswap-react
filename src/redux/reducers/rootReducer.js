import { combineReducers } from "redux";
import loginFormReducer from "./loginFormReducer.js";
import userReducer from "./userReducer.js";
import addUserBookFormReducer from "./addUserBookFormReducer.js";
import activeUserBookReducer from "./activeUserBookReducer.js";

const rootReducer = combineReducers({
  loginForm: loginFormReducer,
  user: userReducer,
  addUserBookForm: addUserBookFormReducer,
  activeUserBook: activeUserBookReducer
});

export default rootReducer;
