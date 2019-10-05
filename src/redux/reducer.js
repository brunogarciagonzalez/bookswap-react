import { combineReducers } from "redux";
import initialState from "./initialState";
import {
  UPDATE_ADD_USERBOOK_FORM_ISBN,
  UPDATE_ADD_USERBOOK_FORM_BOOKDATA,
  UPDATE_ADD_USERBOOK_FORM_ISBN_CONFIRMATION,
  UPDATE_ADD_USERBOOK_FORM_CONDITION,
  UPDATE_ADD_USERBOOK_FORM_DESCRIPTION
} from "./actions/types";
import { makeDeepCopy, includesOtherThanNumbers } from "./helpers.js";
import loginFormReducer from "./reducers/loginFormReducer.js";
import userReducer from "./reducers/userReducer.js";

function addUserBookFormReducer(state = initialState.addUserBookForm, action) {
  switch (action.type) {
    case UPDATE_ADD_USERBOOK_FORM_ISBN: {
      if (
        action.value.length <= 13 &&
        !includesOtherThanNumbers(action.value)
      ) {
        let deepCopy = makeDeepCopy(state);
        deepCopy.isbn = action.value;
        return deepCopy;
      } else {
        return state;
      }
    }
    case UPDATE_ADD_USERBOOK_FORM_BOOKDATA: {
      let deepCopy = makeDeepCopy(state);
      deepCopy.bookData = action.bookData;
      return deepCopy;
    }
    case UPDATE_ADD_USERBOOK_FORM_ISBN_CONFIRMATION: {
      let deepCopy = makeDeepCopy(state);
      deepCopy.isbnConfirmed = action.value;
      if (!action.value) {
        // since the bool is false, the current book in state is incorrect
        // should clear it
        deepCopy.bookData = {};
      }
      return deepCopy;
    }
    case UPDATE_ADD_USERBOOK_FORM_CONDITION: {
      let deepCopy = makeDeepCopy(state);
      deepCopy.condition = action.value;
      return deepCopy;
    }
    case UPDATE_ADD_USERBOOK_FORM_DESCRIPTION: {
      let deepCopy = makeDeepCopy(state);
      deepCopy.description = action.value;
      return deepCopy;
    }
    default: {
      return state;
    }
  }
}

const rootReducer = combineReducers({
  loginForm: loginFormReducer,
  user: userReducer,
  addUserBookForm: addUserBookFormReducer
});

export default rootReducer;
