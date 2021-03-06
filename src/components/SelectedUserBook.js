import React, { Component } from "react";
import { connect } from "react-redux";
import { isEmpty } from "lodash";
import { parseAuthorsIntoString } from "./../redux/helpers.js";
import { fetchAndSelectUserBook } from "./../redux/actions/creators.js";

class SelectedUserBook extends Component {
  componentDidMount() {
    // if storeState's selectedUserBook's ID !== routeProps's :id
    // then need to get that data from the Rails API and update storeState
    if (
      Number.isInteger(this.props.routeId) &&
      this.props.selectedUserBook.id !== this.props.routeId
    ) {
      this.props.fetchAndSelectUserBook(this.props.routeId);
    }
  }

  render() {
    if (isEmpty(this.props.selectedUserBook)) {
      return <div>Loading</div>;
    }

    if (this.props.selectedUserBook[404]) {
      return <div>404 Not Found</div>;
    }

    let {
      book: { title, book_url, cover_url, isbn_10, isbn_13, authors },
      condition,
      description,
      user
    } = this.props.selectedUserBook;
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
    selectedUserBook: state.selectedUserBook
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAndSelectUserBook: id => dispatch(fetchAndSelectUserBook(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedUserBook);
