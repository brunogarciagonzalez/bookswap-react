import { combineReducers } from "redux";
import loginFormReducer from "./reducers/loginFormReducer.js";
import userReducer from "./reducers/userReducer.js";
import addUserBookFormReducer from "./reducers/addUserBookFormReducer.js";

const rootReducer = combineReducers({
  loginForm: loginFormReducer,
  user: userReducer,
  addUserBookForm: addUserBookFormReducer
});

export default rootReducer;
