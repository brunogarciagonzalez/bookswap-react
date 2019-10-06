import React, { Component } from "react";
// import "./App.css";
import LoginForm from "./components/LoginForm";
import AddUserBookFormPhaser from "./components/AddUserBookFormPhaser";
import SelectedUserBook from "./components/SelectedUserBook";
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
        {!isEmpty(this.props.selectedUserBook) ? <SelectedUserBook /> : null}
        <BooksContainer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedUserBook: state.selectedUserBook
  };
}

export default connect(mapStateToProps)(App);
