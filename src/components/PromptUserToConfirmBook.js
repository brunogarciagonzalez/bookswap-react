import React, { Component } from "react";
import { connect } from "react-redux";
import { updateConfirmationOfISBN } from "./../redux/actions/creators";

class PromptUserToConfirmBook extends Component {
  handleNo = e => {
    // button::no should clear state.addUserBookForm.bookData
    this.props.updateConfirmationOfISBN(false);
  };

  handleYes = e => {
    // button::yes should update state.addUserBookForm.isbnConfirmed
    // and move forward to images
    this.props.updateConfirmationOfISBN(true);
  };

  render() {
    let {
      title,
      // bookUrl,
      coverUrl,
      authorsString,
      identifiers
      // authors
    } = this.props.book;

    return (
      <div>
        <img
          src={coverUrl}
          alt={`Book Cover for "${title}" by ${authorsString}`}
        />
        <p>
          Title: {title} <br />
          By: {authorsString} <br />
          ISBN-13: {identifiers["ISBN-13"]} <br />
          ISBN-10: {identifiers["ISBN-10"]} <br />
          Is this your book? <button onClick={this.handleNo}>No</button>{" "}
          <button onClick={this.handleYes}>Yes</button>
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    book: state.addUserBookForm.bookData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateConfirmationOfISBN: value => dispatch(updateConfirmationOfISBN(value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  PromptUserToConfirmBook
);
