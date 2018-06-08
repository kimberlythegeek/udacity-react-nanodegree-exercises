import React, { Component } from 'react';
import User from './User';

class UserList extends Component {

  state = {
    showGamesPlayed: true,
  };

  toggleGamesPlayed = event => {
    this.setState(oldState => ({
      showGamesPlayed: !oldState.showGamesPlayed,
    }));
  }

  render() {

    const users = this.props.users;
    const showGamesPlayed = this.state.showGamesPlayed;

    return (
      <div className='col-8 user-list-container'>
        <div className='row'><div className='col-12'>
          <button
            disabled={users.length===0}
            onClick={this.toggleGamesPlayed}
            className='btn btn-primary'>
            {showGamesPlayed && (
              <span>Hide Games Played</span>
            )}
            {!showGamesPlayed && (
              <span>Show Games Played</span>
            )}
          </button>
        </div></div>
        <ul className='user-list list-group'>
          {users.map((user, index) =>
            <User key={index} user={user} showGamesPlayed={showGamesPlayed}/>
          )}
        </ul>
      </div>
    );

  }

}

export default UserList;
