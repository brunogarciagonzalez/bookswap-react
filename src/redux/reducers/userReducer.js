import initialState from "./../initialState.js";
import { UPDATE_USER } from "./../actions/types.js";

function userReducer(state = initialState.user, action) {
  switch (action.type) {
    case UPDATE_USER: {
      return action.user;
    }
    // case y:
    // {
    //    code block
    // }
    default: {
      return state;
    }
  }
}

export default userReducer;
