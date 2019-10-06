import React, { Component } from "react";
// import "./App.css";
import LoginForm from "./components/LoginForm";
import AddUserBookFormPhaser from "./components/AddUserBookFormPhaser";
import ActiveUserBook from "./components/ActiveUserBook";
import BooksContainer from "./components/BooksContainer";

import { isEmpty } from "lodash";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          BookSwap React (logged in: {localStorage.token ? "true" : "false"})
        </header>
        <LoginForm />
        <AddUserBookFormPhaser />
        {!isEmpty(this.props.activeUserBook) ? <ActiveUserBook /> : null}
        <BooksContainer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeUserBook: state.activeUserBook
  };
}

export default connect(mapStateToProps)(App);
