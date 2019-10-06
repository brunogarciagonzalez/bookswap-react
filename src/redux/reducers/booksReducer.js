import initialState from "./../initialState.js";
import { UPDATE_BOOKS, CLEAR_BOOKS } from "./../actions/types.js";

function booksReducer(state = initialState.books, action) {
  switch (action.type) {
    case UPDATE_BOOKS: {
      return action.books;
    }
    case CLEAR_BOOKS: {
      return initialState.books;
    }
    default: {
      return state;
    }
  }
}

export default booksReducer;
