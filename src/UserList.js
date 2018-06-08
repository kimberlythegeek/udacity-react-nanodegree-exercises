import React, { Component } from 'react';
import User from './User';

class UserList extends Component {

  render() {

    const users = this.props.users;

    return (
      <div className='col-8 user-list-container'>
        <dl className='user-list row'>
          {users.map((user) => {
            <User key={user.id} user={user}/>
          })}
        </dl>
      </div>
    );

  }

}

export default UserList;
