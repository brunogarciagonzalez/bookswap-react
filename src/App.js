import React, { Component } from "react";
// import "./App.css";
import LoginForm from "./components/LoginForm";

class App extends Component {
  render() {
    return (
      <div>
        <header>BookSwap React</header>
        <LoginForm />
      </div>
    );
  }
}

export default App;
