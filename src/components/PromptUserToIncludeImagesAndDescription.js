import React, { Component } from "react";
import { connect } from "react-redux";
import {
  updateAddUserBookFormCondition,
  updateAddUserBookFormDescription,
  submitAddUserBookForm
} from "./../redux/actions/creators.js";

class PromptUserToIncludeImagesAndDescription extends Component {
  handleCondition = e => {
    this.props.updateCondition(e.target.value);
  };

  handleDescription = e => {
    this.props.updateDescription(e.target.value);
  };

  handleSubmission = e => {
    e.preventDefault();
    this.props.submitAddUserBookForm();
  };

  render() {
    return (
      <div>
        {/* images may need to be inputs within the form below */}
        <p>...IMAGES COMING SOON...</p>
        <form onSubmit={this.handleSubmission}>
          <label>
            Select Condition:
            <select
              onChange={this.handleCondition}
              name="condition"
              value={this.props.selectedCondition}
            >
              {[
                "New",
                "Used - Like New",
                "Used - Very Good",
                "Used - Good",
                "Used - Acceptable"
              ].map(condition => (
                <option key={condition} value={condition}>
                  {condition}
                </option>
              ))}
            </select>
          </label>
          <br />
          <label>
            Add Description: <br />
            <textarea
              onChange={this.handleDescription}
              name="description"
              value={this.props.description}
            />
          </label>
          <br />
          <input type="submit" value="Post Swappable" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    book: state.addUserBookForm.bookData,
    selectedCondition: state.addUserBookForm.condition,
    description: state.addUserBookForm.description
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateCondition: value => dispatch(updateAddUserBookFormCondition(value)),
    updateDescription: value =>
      dispatch(updateAddUserBookFormDescription(value)),
    submitAddUserBookForm: () => dispatch(submitAddUserBookForm())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  PromptUserToIncludeImagesAndDescription
);
