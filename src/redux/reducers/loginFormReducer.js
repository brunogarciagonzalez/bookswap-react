import initialState from "./../initialState.js";
import { UPDATE_LOGIN_FORM, CLEAR_LOGIN_FORM } from "./../actions/types.js";
import { makeDeepCopy } from "./../helpers";

function loginFormReducer(state = initialState.loginForm, action) {
  switch (action.type) {
    case UPDATE_LOGIN_FORM: {
      let deepCopy = makeDeepCopy(state);
      deepCopy[action.key] = action.value;
      return deepCopy;
    }
    case CLEAR_LOGIN_FORM: {
      return initialState.loginForm;
    }
    default: {
      return state;
    }
  }
}

export default loginFormReducer;
