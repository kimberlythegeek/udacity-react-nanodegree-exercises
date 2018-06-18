import React, { Component } from 'react';
import MessageLog from './MessageLog';
import SendMessage from './SendMessage';

class Chat extends Component {

  render() {
    const { user, messages, onSend } = this.props;
    return (
      <div className="chat-window">
        <h2>Super Awesome Chat</h2>
        <div className="name sender">{user.username}</div>

        <MessageLog messages={messages} user={user} />
        <SendMessage username={user.username}onSend={onSend} />

      </div>
    )
  }
}

export default Chat;
