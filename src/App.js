import React, { Component } from "react";
import { connect } from "react-redux";
import { isEmpty } from "lodash";

// import "./App.css";
import LoginForm from "./components/LoginForm";
import AddUserBookForm from "./components/AddUserBookForm";
import PromptUserToConfirmBook from "./components/PromptUserToConfirmBook";

class App extends Component {
  render() {
    return (
      <div>
        <header>BookSwap React</header>
        <LoginForm />
        <AddUserBookForm />
        {!isEmpty(this.props.book) ? <PromptUserToConfirmBook /> : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    book: state.addUserBookForm.bookData
  };
};

export default connect(mapStateToProps)(App);
