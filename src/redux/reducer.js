import { combineReducers } from "redux";
import {
  UPDATE_USER,
  UPDATE_ADD_USERBOOK_FORM_ISBN,
  UPDATE_ADD_USERBOOK_FORM_BOOKDATA,
  UPDATE_ADD_USERBOOK_FORM_ISBN_CONFIRMATION
} from "./actions/types";

const initialState = {
  user: {},
  addUserBookForm: {
    isbn: "",
    bookData: {},
    isbnConfirmed: false,
    images: [],
    imagesConfirmed: false,
    saveUserBook: false
  }
};

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

function addUserBookFormReducer(state = initialState.addUserBookForm, action) {
  switch (action.type) {
    case UPDATE_ADD_USERBOOK_FORM_ISBN: {
      let deepCopy = JSON.parse(JSON.stringify(state));
      deepCopy.isbn = action.value;
      return deepCopy;
    }
    case UPDATE_ADD_USERBOOK_FORM_BOOKDATA: {
      let deepCopy = JSON.parse(JSON.stringify(state));
      deepCopy.bookData = action.bookData;
      return deepCopy;
    }
    case UPDATE_ADD_USERBOOK_FORM_ISBN_CONFIRMATION: {
      let deepCopy = JSON.parse(JSON.stringify(state));
      deepCopy.isbnConfirmed = action.value;
      if (!action.value) {
        // since the bool is false, the current book in state is incorrect
        // should clear it
        deepCopy.bookData = {};
      }
      return deepCopy;
    }
    default: {
      return state;
    }
  }
}

const rootReducer = combineReducers({
  user: userReducer,
  addUserBookForm: addUserBookFormReducer
});

export default rootReducer;
