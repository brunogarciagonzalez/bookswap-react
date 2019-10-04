import React, { Component } from "react";
import { connect } from "react-redux";
import { isEmpty } from "lodash";
import PromptUserForISBN from "./PromptUserForISBN";
import PromptUserToConfirmBook from "./PromptUserToConfirmBook";
import PromptUserToIncludeImagesAndDescription from "./PromptUserToIncludeImagesAndDescription";

class AddUserBookFormPhaser extends Component {
  render() {
    return (
      <div>
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

export default connect(mapStateToProps)(AddUserBookFormPhaser);
