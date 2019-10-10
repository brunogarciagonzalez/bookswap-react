import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { updateRedirectTo } from "./../redux/actions/creators.js";

// this component is used to add the functionality of
// client-side redirection from inside action-creators

class RedirectHelper extends Component {
  render() {
    // on any rendering of this component,
    // check current path (from withRouter's addition to props: location.pathname )
    // if the storeState's redirectTo key is not null, and
    // storeState's redirectTo key is different than the current path
    // use withRouter's history.push to change the current path to the value in storeState
    // and then clear out storeState's redirectTo, so that
    // this functionality only activates when desired
    let { history, redirectTo, location: { pathname } } = this.props;
    if (redirectTo && pathname !== redirectTo) {
      history.push(redirectTo);
      this.props.updateRedirectTo(null);
    }
    return <div id="RedirectHelper" />;
  }
}

function mapStateToProps(state) {
  return {
    redirectTo: state.redirectTo
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateRedirectTo: value => dispatch(updateRedirectTo(value))
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RedirectHelper)
);
