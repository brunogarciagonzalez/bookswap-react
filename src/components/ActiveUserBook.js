import React, { Component } from "react";
import { connect } from "react-redux";
import { parseAuthorsIntoString } from "./../redux/helpers.js";

class ActiveUserBook extends Component {
  render() {
    let {
      book: { title, book_url, cover_url, isbn_10, isbn_13, authors },
      condition,
      description,
      user
    } = this.props.activeUserBook;
    let authorsString = parseAuthorsIntoString(authors);

    return (
      <div>
        <img
          src={cover_url}
          alt={`Book Cover for "${title}" by ${authorsString}`}
        />
        <p>
          Title:{" "}
          <a href={book_url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
          <br />
          By: {authorsString} <br />
          ISBN-13: {isbn_13} <br />
          ISBN-10: {isbn_10} <br />
        </p>
        <p>Posted by: {user.username}</p>
        <p>images soon inshaALLAH</p>
        <p>Condition: {condition}</p>
        <p>
          Description: <br /> {description}
        </p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeUserBook: state.activeUserBook
  };
}

export default connect(mapStateToProps)(ActiveUserBook);
