import React, { Component } from "react";
import { connect } from "react-redux";

class PromptUserToConfirmBook extends Component {
    // button::no should clear state.addUserBookForm.bookData
    // button::yes should update state.addUserBookForm.isbnConfirmed 
        // and move forward to images
        
    render(){
        let { title, bookUrl, coverUrl, authorsString, identifiers, authors } = this.props.book;

        return (
            <div>
                <img src={coverUrl} alt={`Book Cover for "${title}" by ${authorsString}`}/>
                <p>
                    Title: {title} <br />
                    By: {authorsString} <br />
                    ISBN-13: {identifiers["ISBN-13"]} <br />
                    ISBN-10: {identifiers["ISBN-10"]} <br />
                    Is this your book? <button>Yes</button> <button>No</button>
                </p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        book: state.addUserBookForm.bookData
    }
}

export default connect(mapStateToProps)(PromptUserToConfirmBook);