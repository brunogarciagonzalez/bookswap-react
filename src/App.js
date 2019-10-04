import React, { Component } from "react";
import { connect } from "react-redux";
import { isEmpty } from "lodash";

// import "./App.css";
import LoginForm from "./components/LoginForm";
import PromptUserForISBN from "./components/PromptUserForISBN";
import PromptUserToConfirmBook from "./components/PromptUserToConfirmBook";
import PromptUserToIncludeImagesAndDescription from "./components/PromptUserToIncludeImagesAndDescription";

class App extends Component {
  render() {
    return (
      <div>
        <header>BookSwap React</header>
        <LoginForm />
        <PromptUserForISBN />
        {!isEmpty(this.props.book) && !this.props.isbnConfirmed ? (
          <PromptUserToConfirmBook />
        ) : null}
        {this.props.isbnConfirmed ? (
          <PromptUserToIncludeImagesAndDescription />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    book: state.addUserBookForm.bookData,
    isbnConfirmed: state.addUserBookForm.isbnConfirmed
  };
};

export default connect(mapStateToProps)(App);
