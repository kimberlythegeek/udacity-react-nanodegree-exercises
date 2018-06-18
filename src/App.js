import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chat from './Chat';

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

const users = [{ username: 'Amy' }, { username: 'John' }];

class App extends Component {
  state = {
    messages: []
  }

  onSend = (username, message) => {
    console.log(message);
    const newMessage = {
      'username': username,
      'message': message
    };
    this.setState(oldState => ({
      messages: oldState.messages.concat([newMessage])
    }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">

        {users.map(user => (
          <Chat
            key={user.username}
            user={user}
            messages={this.state.messages}
            onSend={this.onSend}
          />
        ))}

        </div>
      </div>
    );
  }
}

export default App;
