import React from 'react';

const User = (props) => (
  <li className='user-list-item list-group-item container text-left'>
    <div className='row'>
      <div className='user-name col-3'>@{props.user.username}</div>
      <div className='user-info col-8'>{props.user.firstName} {props.user.lastName}</div>
      <div className='user-games col-1'>
        {props.showGamesPlayed && (
          <span className='badge badge-success'>0</span>
        )}
      </div>
    </div>
  </li>
);

export default User;
