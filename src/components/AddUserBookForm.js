import React, { Component } from "react";
import { connect } from "react-redux";
import {
  updateAddUserBookFormISBN,
  queryAddUserFormISBN
} from "./../redux/actions/creators";

class AddUserBookForm extends Component {
  handleIsbnChange = e => {
    this.props.updateISBN(e.target.value);
  };

  handleIsbnSubmission = e => {
    e.preventDefault();
    this.props.queryISBN();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleIsbnSubmission}>
          <label>
            Your book's ISBN-10 or ISBN-13:
            <input
              onChange={this.handleIsbnChange}
              type="text"
              name="isbn"
              value={this.props.isbn}
            />
            <input type="submit" value="Check ISBN" />
          </label>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isbn: state.addUserBookForm.isbn
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateISBN: value => dispatch(updateAddUserBookFormISBN(value)),
    queryISBN: () => dispatch(queryAddUserFormISBN())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddUserBookForm);
