import { combineReducers } from "redux";

const initialState = {
  user: {}
};

function userReducer(state = initialState.user, action) {
  switch (action.type) {
    // case x:
    //   // code block
    //   break;
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
