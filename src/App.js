import React, { Component } from "react";
import AddUser from "./components/AddUser";
import "./App.css";

class App extends Component {
  state = {
    users: []
  };
  addUser = obj => {
    const users = this.state.users.slice();
    users.push(obj);
    this.setState({
      users
    });
  };
  render() {
    console.log(this.state.users);
    return (
      <div className="App">
        <AddUser addUser={this.addUser} />

        <h1>Number of users:{this.state.users.length}</h1>
      </div>
    );
  }
}

export default App;
