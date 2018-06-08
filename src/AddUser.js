import React, { Component } from 'react';

class AddUser extends Component {
  state = {
    username: '',
    firstName: '',
    lastName: ''
  }

  render() {
    const { username, firstName, lastName } = this.state;
    return (
      <div className='col-4 add-user-container'>
        <form
          onSubmit={this.handleSubmitForm}
        >
          <label htmlFor='new-user-first-name'>First Name:</label>
          <input
            id='new-user-first-name'
            name='firstname'
            type='text'
            value={firstName}
          />

          <label htmlFor='new-user-last-name'>Last Name:</label>
          <input
            id='new-user-last-name'
            name='lastname'
            type='text'
            value={lastName}
          />

          <label htmlFor='new-user-username'>Username:</label>
          <input
            id='new-user-username'
            name='username'
            type='text'
            value={username}
          />

          <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}

export default AddUser;
