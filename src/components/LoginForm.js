import React, { Component } from "react";
import { connect } from "react-redux";
import { updateLoginForm, userLogin } from "./../redux/actions/creators";

class LoginForm extends Component {
  handleInputChange = e => {
    let key = e.target.name;
    let value = e.target.value;
    this.props.updateLoginForm(key, value);
    // let updateStateWith = {};
    // updateStateWith[key] = value;
    // this.setState(updateStateWith);
  };

  handleFormSubmission = e => {
    e.preventDefault();
    this.setState({ username: "", password: "" });
    this.props.handleLogin(this.state);
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
    handleLogin: formData => dispatch(userLogin(formData))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
