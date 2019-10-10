import initialState from "./../initialState.js";
import { UPDATE_REDIRECT_TO } from "./../actions/types.js";

function redirectToReducer(state = initialState.redirectTo, action) {
  switch (action.type) {
    case UPDATE_REDIRECT_TO: {
      return action.redirectTo;
    }
    default: {
      return state;
    }
  }
}

export default redirectToReducer;
