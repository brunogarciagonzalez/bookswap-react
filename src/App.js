import React, { Component } from "react";
// import "./App.css";
import LoginForm from "./components/LoginForm";
import AddUserBookFormPhaser from "./components/AddUserBookFormPhaser";
import SelectedUserBook from "./components/SelectedUserBook";
import BooksContainer from "./components/BooksContainer";

import { Switch, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          BookSwap React (logged in: {localStorage.token ? "true" : "false"})
          <Link to="/explore">Explore</Link>
          {"      "}
          <Link to="/post-new">Post Book</Link>
        </header>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <div>
                  <h1>HomePage!</h1>
                  <h1>HomePage!</h1>
                  <h1>HomePage!</h1>
                  <h1>HomePage!</h1>
                  <h1>HomePage!</h1>
                </div>
              );
            }}
          />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/post-new" component={AddUserBookFormPhaser} />
          <Route exact path="/explore" component={BooksContainer} />
          <Route
            path="/user-books/:id"
            render={routeProps => {
              let routeId = parseInt(routeProps.match.params.id); // will be int or NaN
              return <SelectedUserBook routeId={routeId} />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
