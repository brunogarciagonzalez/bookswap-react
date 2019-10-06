import { combineReducers } from "redux";
import loginFormReducer from "./loginFormReducer.js";
import userReducer from "./userReducer.js";
import addUserBookFormReducer from "./addUserBookFormReducer.js";
import selectedUserBookReducer from "./selectedUserBookReducer.js";
import booksReducer from "./booksReducer.js";

const rootReducer = combineReducers({
  loginForm: loginFormReducer,
  user: userReducer,
  addUserBookForm: addUserBookFormReducer,
  selectedUserBook: selectedUserBookReducer,
  books: booksReducer
});

export default rootReducer;
