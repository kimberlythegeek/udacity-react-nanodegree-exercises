import React, { Component } from 'react';

class SendMessage extends Component {

  state = {
    message: ''
  }

  handleChange = event => {
    const value = event.target.value;
    this.setState({message: value});
  };

  handleSendMessage = event => {
    event.preventDefault();
    console.log(this.state);
    this.props.onSend(this.props.username, this.state.message);
    this.setState({message: ''});
  };

  isDisabled() {
    return this.state.message === '';
  }

  render() {
    const message = this.state.message;
    return (
      <div>
        <form className="input-group" onSubmit={this.handleSendMessage}>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your message..."
            value={message}
            onChange={this.handleChange}
          />
          <div className="input-group-append">
            <button className="btn submit-button" disabled={this.isDisabled()}>
              SEND
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default SendMessage;
