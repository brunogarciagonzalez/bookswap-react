import React, { Component } from "react";
import { connect } from "react-redux";
import { isEmpty } from "lodash";
import {
  fetchAndSelectBook,
  updateSelectedBook
} from "./../redux/actions/creators.js";

class SelectedBook extends Component {
  componentDidMount() {
    // if storeState's selectedUserBook's ID !== routeProps's :id
    // then need to get that data from the Rails API and update storeState
    if (
      Number.isInteger(this.props.routeIsbn) &&
      this.props.selectedBook.id !== this.props.routeIsbn
    ) {
      this.props.fetchAndSelectBook(this.props.routeIsbn);
    } else if (!Number.isInteger(this.props.routeIsbn)) {
      debugger;
      this.props.updateSelectedBook({ 404: true });
    }
  }

  render() {
    // if never fetches then stays empty then says "Loading" instead of 404
    if (isEmpty(this.props.selectedBook)) {
      return <div>Loading</div>;
    }

    if (this.props.selectedBook[404]) {
      return <div>404 Not Found</div>;
    }

    return <div>BookPage</div>;
    //--------
  }
}

function mapStateToProps(state) {
  return {
    selectedBook: state.selectedBook
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAndSelectBook: isbn => dispatch(fetchAndSelectBook(isbn)),
    updateSelectedBook: book => dispatch(updateSelectedBook(book))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedBook);
