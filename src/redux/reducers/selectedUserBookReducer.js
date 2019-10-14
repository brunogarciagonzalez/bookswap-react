import initialState from "./../initialState.js";
import {
  UPDATE_SELECTED_USERBOOK,
  CLEAR_SELECTED_USERBOOK
} from "./../actions/types.js";

function selectedUserBookReducer(
  state = initialState.selectedUserBook,
  action
) {
  switch (action.type) {
    case UPDATE_SELECTED_USERBOOK: {
      return action.userBook;
    }
    case CLEAR_SELECTED_USERBOOK: {
      return initialState.selectedUserBook;
    }
    default: {
      return state;
    }
  }
}

export default selectedUserBookReducer;
