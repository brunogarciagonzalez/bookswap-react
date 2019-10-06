import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBooks } from "./../redux/actions/creators";

class BooksContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    return (
      <div>
        {this.props.books.map((book, idx) => (
          <div>
            <img key={idx} src={book.cover_url} alt={`${book.title}`} />
            <p>{book.user_books.length} copies</p>
          </div>
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  };
}
function mapDispatchToProps(dispatch) {
  return {
    fetchBooks: () => dispatch(fetchBooks())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksContainer);
