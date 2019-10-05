import initialState from "./../initialState.js";
import {
  UPDATE_ACTIVE_USERBOOK,
  CLEAR_ACTIVE_USERBOOK
} from "./../actions/types.js";

function activeUserBookReducer(state = initialState.activeUserBook, action) {
  switch (action.type) {
    case UPDATE_ACTIVE_USERBOOK: {
      return action.userBook;
    }
    case CLEAR_ACTIVE_USERBOOK: {
      return {};
    }
    default: {
      return state;
    }
  }
}

export default activeUserBookReducer;
