import React, { Component } from "react";
import { connect } from "react-redux";
import { updateLoginForm, userLogin } from "./../redux/actions/creators";

class LoginForm extends Component {
  handleInputChange = e => {
    this.props.updateLoginForm(e.target.name, e.target.value);
  };

  handleFormSubmission = e => {
    e.preventDefault();
    this.props.handleLogin();
  };

  render() {
    let { username, password } = this.props;

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

function mapStateToProps(state) {
  return {
    username: state.loginForm.username,
    password: state.loginForm.password
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateLoginForm: (key, value) => dispatch(updateLoginForm(key, value)),
    handleLogin: () => dispatch(userLogin())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
