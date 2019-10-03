import React, { Component } from "react";
// import "./App.css";
import LoginForm from "./components/LoginForm";
import AddUserBookForm from "./components/AddUserBookForm";

class App extends Component {
  render() {
    return (
      <div>
        <header>BookSwap React</header>
        <LoginForm />
        <AddUserBookForm />
      </div>
    );
  }
}

export default App;
