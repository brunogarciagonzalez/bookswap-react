import React, { Component } from "react";
// import "./App.css";
import LoginForm from "./components/LoginForm";
import AddUserBookFormPhaser from "./components/AddUserBookFormPhaser";

class App extends Component {
  render() {
    return (
      <div>
        <header>BookSwap React</header>
        <LoginForm />
        <AddUserBookFormPhaser />
      </div>
    );
  }
}

export default App;
