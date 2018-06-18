import React from 'react';

const MessageLog = (props) => (
  <ul className="message-list">
    {props.messages.map((message, index) => (
      <li
        key={index}
        className={
          message.username === props.user.username ? 'message sender' : 'message recipient'
        }
      >
        <p>{`${message.username}: ${message.message}`}</p>
      </li>
    ))}
  </ul>
)

export default MessageLog;
