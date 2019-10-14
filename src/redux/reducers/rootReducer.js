import { combineReducers } from "redux";
import redirectToReducer from "./redirectToReducer.js";
import loginFormReducer from "./loginFormReducer.js";
import userReducer from "./userReducer.js";
import addUserBookFormReducer from "./addUserBookFormReducer.js";
import selectedUserBookReducer from "./selectedUserBookReducer.js";
import selectedBookReducer from "./selectedBookReducer.js";
import booksReducer from "./booksReducer.js";

const rootReducer = combineReducers({
  redirectTo: redirectToReducer,
  loginForm: loginFormReducer,
  user: userReducer,
  addUserBookForm: addUserBookFormReducer,
  selectedUserBook: selectedUserBookReducer,
  selectedBook: selectedBookReducer,
  books: booksReducer
});

export default rootReducer;
