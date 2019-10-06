import React, { Component } from "react";
// import "./App.css";
import LoginForm from "./components/LoginForm";
import AddUserBookFormPhaser from "./components/AddUserBookFormPhaser";
import SelectedUserBook from "./components/SelectedUserBook";
import BooksContainer from "./components/BooksContainer";

import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          BookSwap React (logged in: {localStorage.token ? "true" : "false"})
        </header>
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/post-new" component={AddUserBookFormPhaser} />
          <Route exact path="/explore-available" component={BooksContainer} />
          <Route
            path="/user-book/:id"
            render={routeProps => {
              // onMount: if storeState's selectedUserBook's ID !== routeProps's :id
              // dispatch FETCH_AND_SELECT_USERBOOK
              // need to build get /user_books/:id user_books#show
              return <SelectedUserBook />;
              // 'double render' dilemma:
              // current ideas: use isEmpty() or localState.loading
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
