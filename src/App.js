import React, { Component } from 'react';
import UserList from './UserList';
import AddUser from './AddUser';
import logo from './logo.svg';
import './App.css';

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  state = {
    users: []
  }
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Gamers</h1>
        </header>
        <div id='main'>
          <div className='container'>
            <UserList users={this.state.users} />
            <AddUser onAddUser={this.addUser} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
