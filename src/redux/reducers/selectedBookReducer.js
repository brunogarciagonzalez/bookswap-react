import initialState from "./../initialState.js";
import {
  UPDATE_SELECTED_BOOK,
  CLEAR_SELECTED_BOOK
} from "./../actions/types.js";

function selectedBookReducer(state = initialState.selectedBook, action) {
  switch (action.type) {
    case UPDATE_SELECTED_BOOK: {
      return action.book;
    }
    case CLEAR_SELECTED_BOOK: {
      return initialState.selectedBook;
    }
    default: {
      return state;
    }
  }
}

export default selectedBookReducer;
