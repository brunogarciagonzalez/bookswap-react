import { combineReducers } from "redux";
import { UPDATE_USER } from "./actions/types";

const initialState = {
  user: {}
};

function userReducer(state = initialState.user, action) {
  switch (action.type) {
    case UPDATE_USER:
      return action.user;
    // case y:
    //   // code block
    //   break;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  user: userReducer
});

export default rootReducer;
