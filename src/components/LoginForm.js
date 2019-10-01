import React, { Component } from "react";
import { connect } from "react-redux";
import { userLogin } from "./../actions/creators";

class LoginForm extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleInputChange = e => {
    let key = e.target.name;
    let value = e.target.value;
    let updateStateWith = {};
    updateStateWith[key] = value;
    this.setState(updateStateWith);
  };

  handleFormSubmission = e => {
    e.preventDefault();
    this.setState({ username: "", password: "" });
    this.props.handleLogin(this.state);
  };

  render() {
    let { username, password } = this.state;

    return (
      <div>
        <form onSubmit={this.handleFormSubmission}>
          <label>
            Username:
            <input
              onChange={this.handleInputChange}
              type="text"
              name="username"
              value={username}
            />
          </label>
          <label>
            Password:
            <input
              onChange={this.handleInputChange}
              type="password"
              name="password"
              value={password}
            />
          </label>
          <input type="submit" value="login" />
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleLogin: formData => dispatch(userLogin(formData))
  };
}

export default connect(null, mapDispatchToProps)(LoginForm);
