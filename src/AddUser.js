import React, { Component } from 'react';

class AddUser extends Component {
  state = {
    username: '',
    firstName: '',
    lastName: ''
  }

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleSubmitForm = event => {
    event.preventDefault();
    this.props.onAddUser(this.state);
    this.setState({
      username: '',
      firstName: '',
      lastName: ''
    });
  };

  render() {
    const { username, firstName, lastName } = this.state;
    return (
      <div className='col-4 add-user-container'>
        <form
          onSubmit={this.handleSubmitForm}
        >
          <div className='form-group'>
            <label htmlFor='new-user-first-name'>First Name:</label>
            <input
              id='new-user-first-name'
              name='firstName'
              type='text'
              className='form-control'
              value={firstName}
              onChange={this.handleChange}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='new-user-last-name'>Last Name:</label>
            <input
              id='new-user-last-name'
              name='lastName'
              type='text'
              className='form-control'
              value={lastName}
              onChange={this.handleChange}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='new-user-username'>Username:</label>
            <input
              id='new-user-username'
              name='username'
              type='text'
              className='form-control'
              value={username}
              onChange={this.handleChange}
            />
          </div>
          <input class='btn btn-primary' type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}

export default AddUser;
